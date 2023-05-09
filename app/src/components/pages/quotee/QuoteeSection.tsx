import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../lib/navigation";
import MyQuoteesPage from "./MyQuoteesPage";
import CreateQuoteePage from "./CreateQuoteePage";
import EditQuoteePage from "./EditQuoteePage";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function QuoteeSection() {
  return (
    <Stack.Navigator id="Quotee" initialRouteName={"MyQuotees"}>
      <Stack.Screen
        name="MyQuotees"
        options={{ title: "My Quotees" }}
        component={MyQuoteesPage}
      />
      <Stack.Screen
        name="CreateQuotee"
        options={{ title: "Create Quotee" }}
        component={CreateQuoteePage}
      />
      <Stack.Screen
        name="EditQuotee"
        options={{ title: "Edit Quotee" }}
        component={EditQuoteePage}
      />
    </Stack.Navigator>
  );
}
