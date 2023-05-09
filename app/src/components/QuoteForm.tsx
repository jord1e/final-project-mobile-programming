import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "./Button";
import { useState } from "react";

export type QuoteFormState = {
  quote: string;
  location: string;
  date: string /* RFC 3339 */;
  context: string /* Why was this said? */;
};

type Props = {
  submitButtonText: string;
  initialState?: QuoteFormState;
  disabled?: boolean;
  onSubmit?: (formState: QuoteFormState) => void;
};

export default function QuoteForm({
  submitButtonText,
  initialState,
  onSubmit,
  disabled,
}: Props): JSX.Element {
  const [formState, setFormState] = useState<QuoteFormState>(
    initialState ?? {
      quote: "",
      location: "",
      date: "",
      context: "",
    }
  );

  function onChange(field: keyof QuoteFormState, value: string) {
    setFormState((formState) => ({
      ...formState,
      [field]: value,
    }));
  }

  const fieldsEditable = !disabled ?? true;

  return (
    <>
      <View
        style={{
          display: "flex",
        }}
      >
        <Text style={styles.formLabel}>Quote</Text>
        <TextInput
          style={styles.formField}
          multiline={true}
          numberOfLines={10}
          editable={fieldsEditable}
          textAlignVertical={"top"}
          value={formState.quote}
          onChangeText={(text) => onChange("quote", text)}
        />
        <Text style={styles.formLabel}>Location</Text>
        <TextInput
          style={styles.formField}
          editable={fieldsEditable}
          value={formState.location}
          onChangeText={(text) => onChange("location", text)}
        />
        <Text style={styles.formLabel}>Date</Text>
        <TextInput
          style={styles.formField}
          editable={fieldsEditable}
          value={formState.date}
          onChangeText={(text) => onChange("date", text)}
        />
        <Text style={styles.formLabel}>Context</Text>
        <TextInput
          style={styles.formField}
          value={formState.context}
          multiline={true}
          editable={fieldsEditable}
          textAlignVertical={"top"}
          numberOfLines={3}
          onChangeText={(text) => onChange("context", text)}
        />
        <Button
          style={styles.submitButton}
          text={submitButtonText}
          onClick={() => onSubmit?.(formState)}
        ></Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  formLabel: {
    marginBottom: 5,
    paddingLeft: 10,
    color: "#000",
  },
  submitButton: {},
  formField: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
});
