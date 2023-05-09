import QuoteCard, { ActionButton } from "./QuoteCard";
import { FlatList, View } from "react-native";
import { graphql, useFragment } from "react-relay";
import React from "react";
import { QuoteCardList_quotes$key } from "./__generated__/QuoteCardList_quotes.graphql";

type Props = {
  quotes: QuoteCardList_quotes$key;
  onEdit?: (quoteId: string) => void;
  onDelete?: (quoteId: string) => void;
  onCardPress?: (quoteId: string) => void;
  quoteCardButtons?: Array<ActionButton>;
};

export default function QuoteCardList(props: Props): JSX.Element {
  const data = useFragment(
    graphql`
      fragment QuoteCardList_quotes on QuoteList {
        quotes {
          id
          ...QuoteCard_quote
        }
      }
    `,
    props.quotes
  );

  const { onEdit, onDelete, quoteCardButtons, onCardPress } = props;

  return (
    <FlatList
      data={data.quotes}
      overScrollMode={"never"}
      keyExtractor={(quote) => {
        return quote.id;
      }}
      renderItem={({ item: quote }) => {
        return (
          <QuoteCard
            onEdit={onEdit}
            onDelete={onDelete}
            onCardPress={onCardPress}
            quote={quote}
            buttons={quoteCardButtons}
          />
        );
      }}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
    ></FlatList>
  );
}
