import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { graphql, useMutation } from "react-relay";
import { RootStackParamList } from "../../../lib/navigation";
import { CreateQuoteePage_createQuoteeMutation } from "./__generated__/CreateQuoteePage_createQuoteeMutation.graphql";
import QuoteeForm, { QuoteeFormState } from "../../QuoteeForm";

type Props = NativeStackScreenProps<RootStackParamList, "CreateQuotee">;

export default function CreateQuoteePage({ navigation }: Props): JSX.Element {
  const [createQuotee] =
    useMutation<CreateQuoteePage_createQuoteeMutation>(graphql`
      mutation CreateQuoteePage_createQuoteeMutation(
        $input: CreateQuoteeInput!
      ) {
        createQuotee(input: $input) {
          quotee {
            id
            name
          }
        }
      }
    `);

  function onCreate(formState: QuoteeFormState) {
    createQuotee({
      variables: {
        input: {
          name: formState.name,
        },
      },
      onCompleted() {
        navigation.goBack();
      },
    });
  }

  return (
    <>
      <View style={{ padding: 20 }}>
        <QuoteeForm
          submitButtonText={"Create Quotee"}
          onSubmit={(formState) => onCreate(formState)}
        ></QuoteeForm>
      </View>
    </>
  );
}
