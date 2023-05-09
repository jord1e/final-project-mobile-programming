import { APP_PADDING } from "../lib/constants";
import HomePage from "./pages/HomePage";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import QuoteSection from "./pages/quote/QuoteSection";
import QuoteListSection from "./pages/list/QuoteListSection";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../lib/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import QuoteeSection from "./pages/quotee/QuoteeSection";

const Tab = createBottomTabNavigator<RootStackParamList>();

type Props = NativeStackScreenProps<RootStackParamList, "Root">;
export default function MainScreen(props: Props) {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        tabBarStyle: {
          height: 60,
        },
        tabBarIconStyle: { marginTop: APP_PADDING },
        tabBarItemStyle: {
          marginBottom: APP_PADDING,
        },
        tabBarActiveTintColor: "#2c8181",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: true,
          tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Quotes"
        options={{
          headerShown: false,
          tabBarIcon: () => <Entypo name="quote" size={20} color={"black"} />,
        }}
        component={QuoteSection}
      />
      <Tab.Screen
        name="Lists"
        options={{
          headerShown: false,
          tabBarIcon: () => <Entypo name="list" size={24} color="black" />,
        }}
        component={QuoteListSection}
      />
      <Tab.Screen
        name="Quotees"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="nature-people"
              size={24}
              color="black"
            />
          ),
        }}
        component={QuoteeSection}
      />
    </Tab.Navigator>
  );
}
