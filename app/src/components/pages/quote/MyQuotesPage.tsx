import { SafeAreaView, Text, View } from "react-native";
import { Suspense, useCallback, useState } from "react";
import { graphql, useLazyLoadQuery, useMutation } from "react-relay";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../lib/navigation";
import { APP_PADDING } from "../../../lib/constants";
import QuoteCardList from "../../QuoteCardList";
import Button from "../../Button";
import { MyQuotesPageQuery } from "./__generated__/MyQuotesPageQuery.graphql";
import { MyQuotesPage_deleteQuoteMutation } from "./__generated__/MyQuotesPage_deleteQuoteMutation.graphql";
import { useFocusEffect } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, "MyQuotes">;

function quotesText(numQuotes: number): string {
  if (numQuotes === 1) {
    return "1 quote";
  } else {
    return numQuotes + " quotes";
  }
}

export default function MyQuotesPage({ navigation }: Props): JSX.Element {
  const [update, setUpdate] = useState(0);

  useFocusEffect(
    useCallback(() => {
      setUpdate((prev) => prev + 1);
    }, [])
  );

  const data = useLazyLoadQuery<MyQuotesPageQuery>(
    graphql`
      query MyQuotesPageQuery {
        viewer {
          myQuotes: quotes {
            size
            ...QuoteCardList_quotes
          }
        }
      }
    `,
    {},
    { fetchPolicy: "network-only", fetchKey: update }
  );

  const [deleteQuote] = useMutation<MyQuotesPage_deleteQuoteMutation>(graphql`
    mutation MyQuotesPage_deleteQuoteMutation($quoteId: ID!) {
      deleteQuote(quoteId: $quoteId) {
        userErrors {
          message
        }
      }
    }
  `);

  const myQuotes = data.viewer.myQuotes;

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
              onEdit={(quoteId) =>
                navigation.navigate("EditQuote", { quoteId: quoteId })
              }
              onDelete={(quoteId) => {
                deleteQuote({
                  variables: { quoteId: quoteId },
                  onCompleted() {
                    navigation.navigate("MyQuotes");
                    setUpdate((update) => update + 1);
                  },
                });
              }}
              onCardPress={(quoteId) => {
                navigation.navigate("QuoteModal", { quoteId: quoteId });
              }}
              quotes={myQuotes}
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
            <Text style={{ flexGrow: 1 }}>{quotesText(myQuotes.size)}</Text>
          </Suspense>
          <Button
            text={"Add Quote"}
            onClick={() => navigation.navigate("CreateQuote")}
          ></Button>
        </View>
      </View>
    </>
  );
}
