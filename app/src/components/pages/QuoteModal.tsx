import { graphql, useLazyLoadQuery } from "react-relay";
import QuoteForm from "../QuoteForm";
import { Share, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../lib/navigation";
import { QuoteModalDataQuery } from "./__generated__/QuoteModalDataQuery.graphql";
import Button from "../Button";
import * as Clipboard from "expo-clipboard";

type Props = NativeStackScreenProps<RootStackParamList, "QuoteModal">;

export default function QuoteModal({ route, navigation }: Props): JSX.Element {
  const { quoteId } = route.params;

  const savedQuote = useLazyLoadQuery<QuoteModalDataQuery>(
    graphql`
      query QuoteModalDataQuery($quoteId: ID!) {
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

  if (!savedQuote) {
    return <></>;
  }

  const quote = savedQuote.currentQuote;

  return (
    <View style={{ padding: 20 }}>
      <QuoteForm
        submitButtonText={"Dismiss"}
        disabled={true}
        // @ts-ignore
        initialState={
          quote && {
            quote: quote.quoteText,
            location: quote.locationText,
            context: quote.quoteContext,
            date: quote.createdAt,
          }
        }
        onSubmit={(formState) => navigation.goBack()}
      ></QuoteForm>
      <Button
        style={{ marginTop: 10 }}
        text={"Share"}
        onClick={() => {
          if (quote.quoteText) {
            Share.share({ message: quote.quoteText });
          }
        }}
      ></Button>
      <Button
        style={{ marginTop: 10 }}
        text={"Copy Quote"}
        onClick={() => {
          if (quote.quoteText) {
            Clipboard.setStringAsync(quote.quoteText);
          }
        }}
      ></Button>
    </View>
  );
}
