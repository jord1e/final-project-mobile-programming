import moment from "moment";
import { graphql, useFragment } from "react-relay";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import { APP_PADDING } from "../lib/constants";
import { QuoteCard_quote$key } from "./__generated__/QuoteCard_quote.graphql";
import { QuoteeCard_data$key } from "./__generated__/QuoteeCard_data.graphql";

type Props = {
  quotee: QuoteeCard_data$key;
  onCardPress?: (quoteeId: string) => void;
  buttons?: Array<ActionButton>;
};

export type ActionButton = {
  text: string;
  onClick: (quoteeId: string) => void;
};

export default function QuoteeCard(props: Props): JSX.Element {
  const quotee = useFragment(
    graphql`
      fragment QuoteeCard_data on Quotee {
        id
        name
      }
    `,
    props.quotee
  );

  const { buttons, onCardPress } = props;

  return (
    <Pressable onPress={onCardPress && (() => onCardPress(quotee.id))}>
      <View style={styles.card}>
        <Text>{quotee.name}</Text>
        <View style={styles.quoteDetailArea}>
          <View style={styles.quoteMetadataBox}></View>
          <View style={styles.actionBar}>
            {buttons?.map(({ text, onClick }, idx) => (
              <Button
                key={idx}
                text={text}
                onClick={() => onClick(quotee.id)}
              />
            ))}
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    borderRadius: APP_PADDING,
    padding: APP_PADDING,
    backgroundColor: "#fff",
  },
  metadataText: {
    color: "#777",
    fontSize: 12,
  },
  quoteDetailArea: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: APP_PADDING,
  },
  quoteMetadataBox: {
    flexGrow: 1,
  },
  actionBar: {
    display: "flex",
    flexDirection: "row",
    columnGap: APP_PADDING,
  },
});
