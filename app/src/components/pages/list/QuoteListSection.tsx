import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../lib/navigation";
import MyQuoteListsPage from "./MyQuoteListsPage";
import CreateQuoteListPage from "./CreateQuoteListPage";
import EditQuoteListPage from "./EditQuoteListPage";
import QuotesInListPage from "./QuotesInListPage";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function QuoteListSection() {
  return (
    <Stack.Navigator id={"Lists"} initialRouteName={"MyQuoteLists"}>
      <Stack.Screen
        name="MyQuoteLists"
        options={{ title: "My Lists" }}
        component={MyQuoteListsPage}
      />
      <Stack.Screen
        name="CreateQuoteList"
        options={{ title: "Create List" }}
        component={CreateQuoteListPage}
      />
      <Stack.Screen
        name="EditQuoteList"
        options={{ title: "Edit List" }}
        component={EditQuoteListPage}
      />
      <Stack.Screen
        name="QuotesInList"
        options={{ title: "List Details" }}
        component={QuotesInListPage}
      />
    </Stack.Navigator>
  );
}
