import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { graphql, useLazyLoadQuery, useMutation } from "react-relay";
import { RootStackParamList } from "../../../lib/navigation";
import QuoteeForm, { QuoteeFormState } from "../../QuoteeForm";
import { EditQuoteePage_editQuoteeMutation } from "./__generated__/EditQuoteePage_editQuoteeMutation.graphql";
import { EditQuoteePage_quoteeDataQuery } from "./__generated__/EditQuoteePage_quoteeDataQuery.graphql";

type Props = NativeStackScreenProps<RootStackParamList, "EditQuotee">;

export default function EditQuoteePage({
  route,
  navigation,
}: Props): JSX.Element {
  const { quoteeId } = route.params;

  const currentSaved = useLazyLoadQuery<EditQuoteePage_quoteeDataQuery>(
    graphql`
      query EditQuoteePage_quoteeDataQuery($quoteeId: ID!) {
        currentQuotee: node(id: $quoteeId) @required(action: THROW) {
          ... on Quotee {
            id
            name
          }
        }
      }
    `,
    { quoteeId: quoteeId },
    { fetchPolicy: "network-only" }
  );

  const [editQuotee] = useMutation<EditQuoteePage_editQuoteeMutation>(graphql`
    mutation EditQuoteePage_editQuoteeMutation(
      $quoteeId: ID!
      $input: UpdateQuoteeInput!
    ) {
      updateQuotee(id: $quoteeId, input: $input) {
        quotee {
          id
          name
        }
      }
    }
  `);

  function onEdit(formState: QuoteeFormState) {
    editQuotee({
      variables: {
        quoteeId: quoteeId,
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
          submitButtonText={"Edit Quotee"}
          initialState={
            currentSaved && {
              name: currentSaved.currentQuotee.name ?? "",
            }
          }
          onSubmit={(formState) => onEdit(formState)}
        ></QuoteeForm>
      </View>
    </>
  );
}
