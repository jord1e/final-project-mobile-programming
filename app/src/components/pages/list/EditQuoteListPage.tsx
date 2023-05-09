import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { graphql, useLazyLoadQuery, useMutation } from "react-relay";
import { RootStackParamList } from "../../../lib/navigation";
import QuoteListForm, { QuoteListFormState } from "../../QuoteListForm";
import { EditQuoteListPage_editQuoteListMutation } from "./__generated__/EditQuoteListPage_editQuoteListMutation.graphql";
import { EditQuoteListPage_quoteListDataQuery } from "./__generated__/EditQuoteListPage_quoteListDataQuery.graphql";
import Button from "../../Button";
import * as Clipboard from "expo-clipboard";

type Props = NativeStackScreenProps<RootStackParamList, "EditQuoteList">;

export default function EditQuoteListPage({
  route,
  navigation,
}: Props): JSX.Element {
  const { quoteListId } = route.params;

  const currentSaved = useLazyLoadQuery<EditQuoteListPage_quoteListDataQuery>(
    graphql`
      query EditQuoteListPage_quoteListDataQuery($quoteListId: ID!) {
        currentQuoteList: node(id: $quoteListId) @required(action: THROW) {
          ... on ShareableQuoteList {
            id
            name
          }
        }
      }
    `,
    { quoteListId: quoteListId },
    { fetchPolicy: "network-only" }
  );

  const [editQuoteList] =
    useMutation<EditQuoteListPage_editQuoteListMutation>(graphql`
      mutation EditQuoteListPage_editQuoteListMutation(
        $quoteListId: ID!
        $input: UpdateQuoteListInput!
      ) {
        updateQuoteList(id: $quoteListId, input: $input) {
          quoteList {
            id
            name
            size
          }
        }
      }
    `);

  function onEdit(formState: QuoteListFormState) {
    editQuoteList({
      variables: {
        quoteListId: quoteListId,
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
        <QuoteListForm
          submitButtonText={"Edit List"}
          initialState={
            currentSaved && {
              name: currentSaved.currentQuoteList.name ?? "",
            }
          }
          onSubmit={(formState) => onEdit(formState)}
        ></QuoteListForm>
      </View>
    </>
  );
}
