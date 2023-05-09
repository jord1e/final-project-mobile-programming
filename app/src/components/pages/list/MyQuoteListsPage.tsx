import { FlatList, Pressable, SafeAreaView, Text, View } from "react-native";
import React, { Suspense, useCallback } from "react";
import {
  graphql,
  useLazyLoadQuery,
  useMutation,
  useRefetchableFragment,
} from "react-relay";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../lib/navigation";
import { APP_PADDING } from "../../../lib/constants";
import Button from "../../Button";
import { MyQuoteListsPageQuery } from "./__generated__/MyQuoteListsPageQuery.graphql";
import QuoteListCard from "../../QuoteListCard";
import { MyQuoteListsPage_deleteQuoteListMutation } from "./__generated__/MyQuoteListsPage_deleteQuoteListMutation.graphql";
import { useFocusEffect } from "@react-navigation/native";
import { MyQuoteListsFetchAgainQuery } from "./__generated__/MyQuoteListsFetchAgainQuery.graphql";
import { MyQuoteListsPage_myQuoteLists$key } from "./__generated__/MyQuoteListsPage_myQuoteLists.graphql";

type Props = NativeStackScreenProps<RootStackParamList, "MyQuoteLists">;

function quotesText(numQuotes: number): string {
  if (numQuotes === 1) {
    return "1 quote";
  } else {
    return numQuotes + " quotes";
  }
}

const MY_QUOTE_LISTS = graphql`
  fragment MyQuoteListsPage_myQuoteLists on User
  @refetchable(queryName: "MyQuoteListsFetchAgainQuery") {
    myQuoteLists: quoteLists {
      size
      id
      ...QuoteListCard_quoteList
    }
  }
`;

export default function MyQuoteListsPage({ navigation }: Props): JSX.Element {
  const quoteListQuery = useLazyLoadQuery<MyQuoteListsPageQuery>(
    graphql`
      query MyQuoteListsPageQuery {
        viewer {
          ...MyQuoteListsPage_myQuoteLists
        }
      }
    `,
    {},
    { fetchPolicy: "network-only" }
  );

  const [data, refetchQuoteLists] = useRefetchableFragment<
    MyQuoteListsFetchAgainQuery,
    MyQuoteListsPage_myQuoteLists$key
  >(MY_QUOTE_LISTS, quoteListQuery.viewer);

  function refreshList() {
    refetchQuoteLists(
      {},
      {
        fetchPolicy: "network-only",
      }
    );
  }

  useFocusEffect(
    useCallback(() => {
      refreshList();
    }, [])
  );

  const [deleteQuoteList] =
    useMutation<MyQuoteListsPage_deleteQuoteListMutation>(graphql`
      mutation MyQuoteListsPage_deleteQuoteListMutation($quoteListId: ID!) {
        deleteQuoteList(quoteListId: $quoteListId) {
          userErrors {
            message
          }
        }
      }
    `);

  if (!data) {
    return <></>;
  }

  const myQuoteLists = data.myQuoteLists;

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
            <FlatList
              data={myQuoteLists}
              overScrollMode={"never"}
              keyExtractor={(quoteList) => {
                return quoteList.id;
              }}
              renderItem={({ item: quoteList }) => {
                return (
                  <Pressable
                    onPress={() => {
                      navigation.navigate("QuotesInList", {
                        quoteListId: quoteList.id,
                      });
                    }}
                  >
                    <QuoteListCard
                      onEdit={(quoteListId) =>
                        navigation.navigate("EditQuoteList", {
                          quoteListId: quoteListId,
                        })
                      }
                      onDelete={(quoteListId) => {
                        deleteQuoteList({
                          variables: { quoteListId: quoteListId },
                          onCompleted() {
                            refreshList();
                          },
                        });
                      }}
                      quoteList={quoteList}
                    />
                  </Pressable>
                );
              }}
              ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            ></FlatList>
          </Suspense>
        </SafeAreaView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingTop: 20,
            paddingBottom: 20,
            paddingHorizontal: 40,
          }}
        >
          <Button
            text={"Add List"}
            onClick={() => navigation.navigate("CreateQuoteList")}
          ></Button>
        </View>
      </View>
    </>
  );
}
