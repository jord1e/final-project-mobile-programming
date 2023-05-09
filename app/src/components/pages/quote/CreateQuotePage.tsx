import QuoteForm, { QuoteFormState } from "../../QuoteForm";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, ScrollView, View } from "react-native";
import { graphql, useMutation } from "react-relay";
import { RootStackParamList } from "../../../lib/navigation";
import { CreateQuotePage_createQuoteMutation } from "./__generated__/CreateQuotePage_createQuoteMutation.graphql";

type Props = NativeStackScreenProps<RootStackParamList, "CreateQuote">;

export default function CreateQuotePage({ navigation }: Props): JSX.Element {
  const [createQuote] =
    useMutation<CreateQuotePage_createQuoteMutation>(graphql`
      mutation CreateQuotePage_createQuoteMutation($input: CreateQuoteInput!) {
        createQuote(input: $input) {
          quote {
            id
            createdAt
            quoteText
            locationText
            quoteContext
          }
        }
      }
    `);

  function onCreate(formState: QuoteFormState) {
    createQuote({
      variables: {
        input: {
          quoteDate: formState.date,
          quoteContext: formState.context,
          locationText: formState.location,
          quoteText: formState.quote,
        },
      },
      onCompleted() {
        navigation.navigate("MyQuotes");
      },
    });
  }

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <ScrollView>
        <QuoteForm
          submitButtonText={"Create Quote"}
          onSubmit={(formState) => onCreate(formState)}
        ></QuoteForm>
      </ScrollView>
    </SafeAreaView>
  );
}
