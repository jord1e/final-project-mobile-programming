import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../lib/navigation";
import MyQuotesPage from "./MyQuotesPage";
import CreateQuotePage from "./CreateQuotePage";
import EditQuotePage from "./EditQuotePage";
import AddQuoteToListPage from "./AddQuoteToListPage";
import UpdateQuoteeToQuotePage from "./UpdateQuoteeToQuotePage";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function QuoteSection() {
  return (
    <Stack.Navigator id="Quote" initialRouteName={"MyQuotes"}>
      <Stack.Screen
        name="MyQuotes"
        options={{ title: "My Quotes" }}
        component={MyQuotesPage}
      />
      <Stack.Screen
        name="CreateQuote"
        options={{ title: "Create Quote" }}
        component={CreateQuotePage}
      />
      <Stack.Screen
        name="EditQuote"
        options={{ title: "Edit Quote" }}
        component={EditQuotePage}
      />
      <Stack.Screen
        name="QuoteModifyListPresence"
        options={{ title: "Modify List Selection" }}
        component={AddQuoteToListPage}
      />
      <Stack.Screen
        name="UpdateQuoteeToQuote"
        options={{ title: "Modify Quotees of Quote" }}
        component={UpdateQuoteeToQuotePage}
      />
    </Stack.Navigator>
  );
}
