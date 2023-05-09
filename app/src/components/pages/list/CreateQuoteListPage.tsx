import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { graphql, useMutation } from "react-relay";
import { RootStackParamList } from "../../../lib/navigation";
import { CreateQuoteListPage_createQuoteListMutation } from "./__generated__/CreateQuoteListPage_createQuoteListMutation.graphql";
import QuoteListForm, { QuoteListFormState } from "../../QuoteListForm";

type Props = NativeStackScreenProps<RootStackParamList, "CreateQuoteList">;

export default function CreateQuoteListPage({
  navigation,
}: Props): JSX.Element {
  const [createQuoteList] =
    useMutation<CreateQuoteListPage_createQuoteListMutation>(graphql`
      mutation CreateQuoteListPage_createQuoteListMutation(
        $input: CreateQuoteListInput!
      ) {
        createQuoteList(input: $input) {
          quoteList {
            id
            name
          }
        }
      }
    `);

  function onCreate(formState: QuoteListFormState) {
    createQuoteList({
      variables: {
        input: {
          name: formState.name,
        },
      },
      onCompleted() {
        navigation.navigate("MyQuoteLists");
      },
    });
  }

  return (
    <>
      <View style={{ padding: 20 }}>
        <QuoteListForm
          submitButtonText={"Create List"}
          onSubmit={(formState) => onCreate(formState)}
        ></QuoteListForm>
      </View>
    </>
  );
}
