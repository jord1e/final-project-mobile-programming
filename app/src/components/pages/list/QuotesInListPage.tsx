import { SafeAreaView, Text, View } from "react-native";
import { Suspense } from "react";
import {
  graphql,
  useLazyLoadQuery,
  useMutation,
  useRefetchableFragment,
} from "react-relay";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../lib/navigation";
import { APP_PADDING } from "../../../lib/constants";
import QuoteCardList from "../../QuoteCardList";
import Button from "../../Button";
import { RefetchQuotesInListQuery } from "./__generated__/RefetchQuotesInListQuery.graphql";
import { QuotesInListPageQuery } from "./__generated__/QuotesInListPageQuery.graphql";
import { QuotesInListPage_data$key } from "./__generated__/QuotesInListPage_data.graphql";
import { QuotesInListPage_removeQuoteFromListMutation } from "./__generated__/QuotesInListPage_removeQuoteFromListMutation.graphql";

type Props = NativeStackScreenProps<RootStackParamList, "QuotesInList">;

function quotesText(numQuotes: number): string {
  if (numQuotes === 1) {
    return "1 quote";
  } else {
    return numQuotes + " quotes";
  }
}

export default function QuotesInListPage({
  navigation,
  route,
}: Props): JSX.Element {
  const quoteListId = route.params.quoteListId;

  const quoteListQuery = useLazyLoadQuery<QuotesInListPageQuery>(
    graphql`
      query QuotesInListPageQuery($quoteListId: ID!) {
        node(id: $quoteListId) {
          ... on ShareableQuoteList {
            ...QuotesInListPage_data
          }
        }
      }
    `,
    { quoteListId: quoteListId },
    { fetchPolicy: "network-only" }
  );

  const [quoteList, refetchQuotes] = useRefetchableFragment<
    RefetchQuotesInListQuery,
    QuotesInListPage_data$key
  >(
    graphql`
      fragment QuotesInListPage_data on ShareableQuoteList
      @refetchable(queryName: "RefetchQuotesInListQuery") {
        name
        size
        ...QuoteListCard_quoteList
        ...QuoteCardList_quotes
      }
    `,
    quoteListQuery.node
  );

  const [removeFromList] =
    useMutation<QuotesInListPage_removeQuoteFromListMutation>(graphql`
      mutation QuotesInListPage_removeQuoteFromListMutation(
        $quoteListId: ID!
        $quoteId: ID!
      ) {
        updateQuoteList(id: $quoteListId, input: { removeQuotes: [$quoteId] }) {
          quoteList {
            ...QuoteListCard_quoteList
          }
          userErrors {
            message
          }
        }
      }
    `);

  function refreshList() {
    refetchQuotes({});
  }

  if (!quoteList) {
    return <></>;
  }

  return (
    <>
      <View
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
        }}
      >
        <SafeAreaView
          style={{
            display: "flex",
            flexShrink: 1,
            paddingHorizontal: APP_PADDING,
            paddingTop: APP_PADDING,
          }}
        >
          <Suspense fallback={<Text>Loading Quotes</Text>}>
            <QuoteCardList
              quoteCardButtons={[
                {
                  text: "Unlist",
                  onClick(quoteId) {
                    removeFromList({
                      variables: { quoteListId: quoteListId, quoteId: quoteId },
                      onCompleted() {
                        refreshList();
                      },
                    });
                  },
                },
              ]}
              onCardPress={(quoteId) => {
                navigation.navigate("QuoteModal", { quoteId: quoteId });
              }}
              quotes={quoteList}
            />
          </Suspense>
        </SafeAreaView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 20,
            paddingBottom: 20,
            paddingHorizontal: 40,
          }}
        >
          <Suspense fallback={quotesText(0)}>
            <Text style={{ flexGrow: 1 }}>
              {quotesText(quoteList.size)} in list {quoteList.name}
            </Text>
          </Suspense>
          <Button
            text={"Edit List"}
            onClick={() =>
              navigation.navigate("EditQuoteList", { quoteListId: quoteListId })
            }
          ></Button>
        </View>
      </View>
    </>
  );
}
