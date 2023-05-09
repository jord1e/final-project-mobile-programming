import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, ScrollView, View } from "react-native";
import { graphql, useLazyLoadQuery, useMutation } from "react-relay";
import { RootStackParamList } from "../../../lib/navigation";
import QuoteForm, { QuoteFormState } from "../../QuoteForm";
import { EditQuotePage_quoteDataQuery } from "./__generated__/EditQuotePage_quoteDataQuery.graphql";
import { EditQuotePage_editQuoteMutation } from "./__generated__/EditQuotePage_editQuoteMutation.graphql";
import Button from "../../Button";
import React from "react";

type Props = NativeStackScreenProps<RootStackParamList, "EditQuote">;

export default function EditQuotePage({
  route,
  navigation,
}: Props): JSX.Element {
  const { quoteId } = route.params;

  const currentSaved = useLazyLoadQuery<EditQuotePage_quoteDataQuery>(
    graphql`
      query EditQuotePage_quoteDataQuery($quoteId: ID!) {
        currentQuote: node(id: $quoteId) @required(action: THROW) {
          ... on Quote {
            id
            locationText
            quoteDate
            quoteText
            quoteContext
            createdAt
          }
        }
      }
    `,
    { quoteId: quoteId },
    { fetchPolicy: "network-only" }
  );

  const [editQuote] = useMutation<EditQuotePage_editQuoteMutation>(graphql`
    mutation EditQuotePage_editQuoteMutation(
      $quoteId: ID!
      $input: UpdateQuoteInput!
    ) {
      updateQuote(id: $quoteId, input: $input) {
        quote {
          id
          quoteDate
          quoteText
          locationText
          quoteContext
        }
      }
    }
  `);

  const currentQuote = currentSaved.currentQuote;

  function onEdit(formState: QuoteFormState) {
    editQuote({
      variables: {
        quoteId: quoteId,
        input: {
          quoteDate: formState.date,
          quoteContext: formState.context,
          locationText: formState.location,
          quoteText: formState.quote,
        },
      },
      onCompleted() {
        navigation.goBack();
      },
    });
  }

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <ScrollView>
        <QuoteForm
          submitButtonText={"Edit Quote"}
          // @ts-ignore
          initialState={
            currentQuote && {
              quote: currentQuote.quoteText,
              location: currentQuote.locationText,
              context: currentQuote.quoteContext,
              date: currentQuote.createdAt,
            }
          }
          onSubmit={(formState) => onEdit(formState)}
        ></QuoteForm>
        <Button
          style={{ marginTop: 10 }}
          text={"Edit Lists"}
          onClick={() => {
            navigation.navigate("QuoteModifyListPresence", {
              quoteId: quoteId,
            });
          }}
        ></Button>
        <Button
          style={{ marginTop: 10 }}
          text={"Edit Quotees (people quoted)"}
          onClick={() => {
            navigation.navigate("UpdateQuoteeToQuote", {
              quoteId: quoteId,
            });
          }}
        ></Button>
      </ScrollView>
    </SafeAreaView>
  );
}
