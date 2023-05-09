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
import { UpdateQuoteeToQuotePageModifyMutation } from "./__generated__/UpdateQuoteeToQuotePageModifyMutation.graphql";
import { UpdateQuoteeToQuotePage_quoteeListQuery } from "./__generated__/UpdateQuoteeToQuotePage_quoteeListQuery.graphql";
import QuoteeCardList from "../../QuoteeCardList";
import QuoteeCard from "../../QuoteeCard";

type Props = NativeStackScreenProps<RootStackParamList, "UpdateQuoteeToQuote">;

export default function UpdateQuoteeToQuotePage({
  route,
  navigation,
}: Props): JSX.Element {
  const { quoteId } = route.params;

  const [modifyCounter, incModifyCounter] = useCounter();

  const currentData = useLazyLoadQuery<UpdateQuoteeToQuotePage_quoteeListQuery>(
    graphql`
      query UpdateQuoteeToQuotePage_quoteeListQuery($quoteId: ID!) {
        viewer {
          quotees {
            id
            ...QuoteeCard_data
          }
        }
        currentQuote: node(id: $quoteId) @required(action: THROW) {
          ... on Quote {
            id
            quotees {
              id
            }
          }
        }
      }
    `,
    { quoteId: quoteId },
    { fetchPolicy: "network-only", fetchKey: modifyCounter }
  );

  const [updateList] =
    useMutation<UpdateQuoteeToQuotePageModifyMutation>(graphql`
      mutation UpdateQuoteeToQuotePageModifyMutation(
        $quoteId: ID!
        $input: UpdateQuoteInput!
      ) {
        updateQuote(id: $quoteId, input: $input) {
          quote {
            quotees {
              id
              name
            }
          }
        }
      }
    `);

  function addToQuote(quoteeId: string) {
    updateList({
      variables: {
        quoteId: quoteId,
        input: {
          quotees: {
            add: [quoteeId],
          },
        },
      },
      onCompleted() {
        incModifyCounter();
      },
    });
  }

  function removeFromQuote(quoteeId: string) {
    updateList({
      variables: {
        quoteId: quoteId,
        input: {
          quotees: {
            remove: [quoteeId],
          },
        },
      },
      onCompleted() {
        incModifyCounter();
      },
    });
  }

  function isInQuote(quoteeId: string): boolean {
    return (
      currentData.currentQuote.quotees!!.filter(({ id }) => id === quoteeId)
        .length >= 1
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
              data={currentData.viewer.quotees}
              overScrollMode={"never"}
              keyExtractor={(quotee) => quotee.id}
              renderItem={({ item: quotee }) => {
                return (
                  <QuoteeCard
                    quotee={quotee}
                    buttons={[
                      isInQuote(quotee.id)
                        ? {
                            text: "Remove",
                            onClick(quoteeId: string) {
                              removeFromQuote(quoteeId);
                            },
                          }
                        : {
                            text: "Add",
                            onClick(quoteeId: string) {
                              addToQuote(quoteeId);
                            },
                          },
                    ]}
                  />
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
