import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextStyle,
} from "react-native";

type Props = {
  text: string;
  onClick?: () => void;
  textStyle?: TextStyle;
} & PressableProps;

export default function Button(props: Props): JSX.Element {
  const { text, onClick, textStyle } = props;

  return (
    <Pressable {...props} onPress={() => onClick?.()}>
      <Text style={{ ...style.text, ...textStyle }}>{text}</Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
  text: {
    borderRadius: 17,
    backgroundColor: "black",
    color: "white",
    padding: 10,
    textAlign: "center",
  },
});
