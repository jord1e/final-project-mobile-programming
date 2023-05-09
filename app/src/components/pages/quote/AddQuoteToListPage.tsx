import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, Pressable, SafeAreaView, Text, View } from "react-native";
import { graphql, useLazyLoadQuery, useMutation } from "react-relay";
import { RootStackParamList } from "../../../lib/navigation";
import QuoteListForm from "../../QuoteListForm";
import { AddQuoteToListPageModifyMutation } from "./__generated__/AddQuoteToListPageModifyMutation.graphql";
import { AddQuoteToListPage_quoteListQuery } from "./__generated__/AddQuoteToListPage_quoteListQuery.graphql";
import { APP_PADDING } from "../../../lib/constants";
import React, { Suspense } from "react";
import QuoteListCard from "../../QuoteListCard";
import useCounter from "../../useCounter";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "QuoteModifyListPresence"
>;

export default function AddQuoteToListPage({
  route,
  navigation,
}: Props): JSX.Element {
  const { quoteId } = route.params;

  const [modifyCounter, incModifyCounter] = useCounter();

  const currentLists = useLazyLoadQuery<AddQuoteToListPage_quoteListQuery>(
    graphql`
      query AddQuoteToListPage_quoteListQuery {
        viewer {
          quoteLists {
            id
            name
            size
            quotes {
              id
            }
            ...QuoteListCard_quoteList
          }
        }
      }
    `,
    {},
    { fetchPolicy: "network-only", fetchKey: modifyCounter }
  );

  const [updateList] = useMutation<AddQuoteToListPageModifyMutation>(graphql`
    mutation AddQuoteToListPageModifyMutation(
      $quoteListId: ID!
      $input: UpdateQuoteListInput!
    ) {
      updateQuoteList(id: $quoteListId, input: $input) {
        quoteList {
          id
          name
          size
          quotes {
            id
          }
          ...QuoteCardList_quotes
        }
      }
    }
  `);

  function addToList(quoteListId: string) {
    updateList({
      variables: {
        quoteListId: quoteListId,
        input: {
          addQuotes: [quoteId],
        },
      },
      onCompleted() {
        incModifyCounter();
      },
    });
  }

  function removeFromList(quoteListId: string) {
    updateList({
      variables: {
        quoteListId: quoteListId,
        input: {
          removeQuotes: [quoteId],
        },
      },
      onCompleted() {
        incModifyCounter();
      },
    });
  }

  function isInList(quoteListId: string): boolean {
    return (
      currentLists.viewer.quoteLists.filter(
        (list) =>
          list.id === quoteListId &&
          list.quotes.filter(({ id }) => id === quoteId).length >= 1
      ).length >= 1
    );
  }

  return (
    <>
      <View>
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
              data={currentLists.viewer.quoteLists}
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
                      quoteList={quoteList}
                      buttons={[
                        isInList(quoteList.id)
                          ? {
                              text: "Remove",
                              onClick(quoteListId: string) {
                                removeFromList(quoteListId);
                              },
                            }
                          : {
                              text: "Add",
                              onClick(quoteListId: string) {
                                addToList(quoteListId);
                              },
                            },
                      ]}
                    />
                  </Pressable>
                );
              }}
              ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            ></FlatList>
          </Suspense>
        </SafeAreaView>
      </View>
    </>
  );
}
