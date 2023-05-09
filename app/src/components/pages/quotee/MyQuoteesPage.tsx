import { SafeAreaView, Text, View } from "react-native";
import { Suspense, useCallback, useState } from "react";
import { graphql, useLazyLoadQuery, useMutation } from "react-relay";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../lib/navigation";
import { APP_PADDING } from "../../../lib/constants";
import Button from "../../Button";
import QuoteeCardList from "../../QuoteeCardList";
import { MyQuoteesPageQuery } from "./__generated__/MyQuoteesPageQuery.graphql";
import { MyQuoteesPage_deleteQuoteeMutation } from "./__generated__/MyQuoteesPage_deleteQuoteeMutation.graphql";
import { useFocusEffect } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, "MyQuotees">;

function quoteesText(numQuotees: number): string {
  if (numQuotees === 1) {
    return "1 quotee";
  } else {
    return numQuotees + " quotees";
  }
}

export default function MyQuoteesPage({ navigation }: Props): JSX.Element {
  const [update, setUpdate] = useState(0);

  useFocusEffect(
    useCallback(() => {
      setUpdate((prev) => prev + 1);
    }, [])
  );

  const data = useLazyLoadQuery<MyQuoteesPageQuery>(
    graphql`
      query MyQuoteesPageQuery {
        viewer {
          myQuotees: quotees {
            __typename
          }
          ...QuoteeCardList_quotees
        }
      }
    `,
    {},
    { fetchPolicy: "network-only", fetchKey: update }
  );

  const [deleteQuotee] =
    useMutation<MyQuoteesPage_deleteQuoteeMutation>(graphql`
      mutation MyQuoteesPage_deleteQuoteeMutation($quoteeId: ID!) {
        deleteQuotee(quoteeId: $quoteeId) {
          userErrors {
            message
          }
        }
      }
    `);

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
            <QuoteeCardList
              quoteCardButtons={[
                {
                  text: "Delete",
                  onClick(quoteeId) {
                    deleteQuotee({
                      variables: { quoteeId: quoteeId },
                      onCompleted() {
                        setUpdate((prev) => prev + 1);
                      },
                    });
                  },
                },
                {
                  text: "Edit",
                  onClick(quoteeId) {
                    navigation.navigate("EditQuotee", { quoteeId: quoteeId });
                  },
                },
              ]}
              quotees={data.viewer}
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
          <Suspense fallback={quoteesText(0)}>
            <Text style={{ flexGrow: 1 }}>
              {quoteesText(data.viewer.myQuotees.length)}
            </Text>
          </Suspense>
          <Button
            text={"Add Quotee"}
            onClick={() => navigation.navigate("CreateQuotee")}
          ></Button>
        </View>
      </View>
    </>
  );
}
