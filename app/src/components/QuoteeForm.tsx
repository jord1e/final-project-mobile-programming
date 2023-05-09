import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "./Button";
import { useState } from "react";

export type QuoteeFormState = {
  name: string;
};

type Props = {
  submitButtonText: string;
  initialState?: QuoteeFormState;
  onSubmit?: (formState: QuoteeFormState) => void;
};

export default function QuoteeForm({
  submitButtonText,
  initialState,
  onSubmit,
}: Props): JSX.Element {
  const [formState, setFormState] = useState<QuoteeFormState>(
    initialState ?? {
      name: "",
    }
  );

  function onChange(field: keyof QuoteeFormState, value: string) {
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
