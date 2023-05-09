import QuoteeCard, { ActionButton } from "./QuoteeCard";
import { FlatList, View } from "react-native";
import { graphql, useFragment } from "react-relay";
import React from "react";
import { QuoteeCardList_quotees$key } from "./__generated__/QuoteeCardList_quotees.graphql";

type Props = {
  quotees: QuoteeCardList_quotees$key;
  onCardPress?: (quoteeId: string) => void;
  quoteCardButtons?: Array<ActionButton>;
};

export default function QuoteeCardList(props: Props): JSX.Element {
  const data = useFragment(
    graphql`
      fragment QuoteeCardList_quotees on User {
        quotees {
          id
          ...QuoteeCard_data
        }
      }
    `,
    props.quotees
  );

  if (!data) {
    return <></>;
  }

  const { quoteCardButtons, onCardPress } = props;

  return (
    <FlatList
      data={data.quotees}
      overScrollMode={"never"}
      keyExtractor={(quotee) => quotee.id}
      renderItem={({ item: quotee }) => {
        return (
          <QuoteeCard
            onCardPress={onCardPress}
            quotee={quotee}
            buttons={quoteCardButtons}
          />
        );
      }}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
    ></FlatList>
  );
}
