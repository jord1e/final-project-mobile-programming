import moment from "moment";
import { graphql, useFragment } from "react-relay";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import { APP_PADDING } from "../lib/constants";
import { QuoteCard_quote$key } from "./__generated__/QuoteCard_quote.graphql";

type CardSize = "full" | "half";

type Props = {
  quote: QuoteCard_quote$key;
  cardSize?: CardSize;
  onEdit?: (quoteId: string) => void;
  onDelete?: (quoteId: string) => void;
  onCardPress?: (quoteId: string) => void;
  buttons?: Array<ActionButton>;
};

export type ActionButton = {
  text: string;
  onClick: (quoteId: string) => void;
};

function peopleQuotedText(numPeopleQuoted: number): string {
  if (numPeopleQuoted === 0) {
    return "nobody quoted";
  } else if (numPeopleQuoted === 1) {
    return "one person quoted";
  } else {
    return numPeopleQuoted + " people quoted";
  }
}

export default function QuoteCard(props: Props): JSX.Element {
  const quote = useFragment(
    graphql`
      fragment QuoteCard_quote on Quote {
        id
        quoteText
        quoteDate
        locationText
        quotees {
          id
        }
      }
    `,
    props.quote
  );

  const { onEdit, onDelete, buttons, onCardPress } = props;

  const displayDate = moment(quote.quoteDate).format("D MMMM YYYY");

  return (
    <Pressable onPress={onCardPress && (() => onCardPress(quote.id))}>
      <View style={styles.card}>
        <Text>{quote.quoteText}</Text>
        <View style={styles.quoteDetailArea}>
          <View style={styles.quoteMetadataBox}>
            <Text style={styles.dateText}>{displayDate}</Text>
            <Text style={styles.peopleQuoted}>
              {peopleQuotedText(quote.quotees.length)}
            </Text>
          </View>
          <View style={styles.actionBar}>
            {onDelete && (
              <Button text={"Delete"} onClick={() => onDelete(quote.id)} />
            )}
            {onEdit && (
              <Button text={"Edit"} onClick={() => onEdit(quote.id)} />
            )}
            {buttons?.map(({ text, onClick }, idx) => (
              <Button key={idx} text={text} onClick={() => onClick(quote.id)} />
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
  dateText: {
    color: "#777",
    fontSize: 12,
  },
  peopleQuoted: {
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
