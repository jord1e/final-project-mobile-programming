import { View, Text } from "react-native";
import Button from "../Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../lib/navigation";
import { useContext } from "react";
import { UserContext } from "../../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomePage({ navigation }: Props) {
  const user = useContext(UserContext);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Quote App</Text>
      <Text style={{ fontSize: 15, marginBottom: 20 }}>
        Hi
        {
          // @ts-ignore
          user.name ? " " + user.name : ", welcome"
        }
      </Text>
      <Button
        style={{ paddingBottom: 20, width: 150 }}
        textStyle={{ textAlign: "center" }}
        text={"Quotes"}
        onClick={() => navigation.navigate("Quotes")}
      />
      <Button
        style={{ paddingBottom: 20, width: 150 }}
        textStyle={{ textAlign: "center" }}
        text={"Lists"}
        onClick={() => navigation.navigate("Lists")}
      />
      <Button
        style={{ paddingBottom: 20, width: 150 }}
        textStyle={{ textAlign: "center" }}
        text={"Quotees"}
        onClick={() => navigation.navigate("Quotees")}
      />
    </View>
  );
}
