import moment from "moment";
import { graphql, useFragment } from "react-relay";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import { APP_PADDING } from "../lib/constants";
import { QuoteCard_quote$key } from "./__generated__/QuoteCard_quote.graphql";
import { QuoteListCard_quoteList$key } from "./__generated__/QuoteListCard_quoteList.graphql";

type CardSize = "full" | "half";

type Props = {
  quoteList: QuoteListCard_quoteList$key;
  cardSize?: CardSize;
  onEdit?: (quoteListId: string) => void;
  onDelete?: (quoteListId: string) => void;
  buttons?: Array<ActionButton>;
};

export type ActionButton = {
  text: string;
  onClick: (quoteListId: string) => void;
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

function quotesText(numQuotes: number): string {
  if (numQuotes === 1) {
    return "1 quote";
  } else {
    return numQuotes + " quotes";
  }
}

export default function QuoteListCard(props: Props): JSX.Element {
  const quoteList = useFragment(
    graphql`
      fragment QuoteListCard_quoteList on ShareableQuoteList {
        id
        name
        size
        createdAt
      }
    `,
    props.quoteList
  );

  const { onEdit, onDelete, buttons } = props;
  //
  const createdDate = moment(quoteList.createdAt).format("D MMMM YYYY");

  return (
    <View style={styles.card}>
      <Text>{quoteList.name}</Text>
      <View style={styles.quoteDetailArea}>
        <View style={styles.quoteMetadataBox}>
          <Text style={styles.peopleQuoted}>{quotesText(quoteList.size)}</Text>
          <Text style={styles.dateText}>Created on {createdDate}</Text>
        </View>
        <View style={styles.actionBar}>
          {onDelete && (
            <Button text={"Delete"} onClick={() => onDelete(quoteList.id)} />
          )}
          {onEdit && (
            <Button text={"Edit"} onClick={() => onEdit(quoteList.id)} />
          )}
          {buttons?.map(({ text, onClick }, idx) => (
            <Button
              key={idx}
              text={text}
              onClick={() => onClick(quoteList.id)}
            />
          ))}
        </View>
      </View>
    </View>
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
