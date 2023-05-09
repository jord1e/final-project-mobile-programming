import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "./Button";
import { useState } from "react";

export type QuoteListFormState = {
  name: string;
};

type Props = {
  submitButtonText: string;
  initialState?: QuoteListFormState;
  onSubmit?: (formState: QuoteListFormState) => void;
};

export default function QuoteListForm({
  submitButtonText,
  initialState,
  onSubmit,
}: Props): JSX.Element {
  const [formState, setFormState] = useState<QuoteListFormState>(
    initialState ?? {
      name: "",
    }
  );

  function onChange(field: keyof QuoteListFormState, value: string) {
    setFormState((formState) => ({
      ...formState,
      [field]: value,
    }));
  }

  return (
    <>
      <View
        style={{
          display: "flex",
        }}
      >
        <Text style={styles.formLabel}>Name</Text>
        <TextInput
          style={styles.formField}
          value={formState.name}
          onChangeText={(text) => onChange("name", text)}
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
