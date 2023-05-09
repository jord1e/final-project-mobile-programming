// noinspection ES6PreferShortImport

import React, { createContext, useEffect, useState } from "react";
import { Environment, RelayEnvironmentProvider } from "react-relay";
import { NavigationContainer } from "@react-navigation/native";
import { createNewRelayEnvironment } from "./src/lib/relay";
import { RootStackParamList } from "./src/lib/navigation";
import { useFonts } from "expo-font";
import MainScreen from "./src/components/MainScreen";
import QuoteModal from "./src/components/pages/QuoteModal";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import { View, Text, Button } from "react-native";
import { red } from "react-native-reanimated/lib/types/lib";

const RootStack = createNativeStackNavigator<RootStackParamList>();

WebBrowser.maybeCompleteAuthSession();

export const UserContext = createContext({});

export default function App() {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const useProxy = true;
  const redirectUri = AuthSession.makeRedirectUri({
    useProxy,
  });

  const discovery = AuthSession.useAutoDiscovery(
    "https://efilibrary-test.eu.auth0.com"
  );

  console.log(redirectUri);

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: "cxn4QztVLssHELXbcx9fmRdh1uBfUeKi",
      clientSecret:
        "96mG5eBrppTMFyxjAmj_2TMiLvdWK8X7om4YUKuS-vb1Vw9_0RltShJ_SxieKS30",
      redirectUri: "exp://192.168.1.103:19000",
      scopes: ["openid", "profile", "email"],
      responseType: "token",
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      // @ts-ignore
      setToken(response.authentication.accessToken);
      getUserInfo();
    }
  }, [response, token]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://efilibrary-test.eu.auth0.com/userinfo",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
    }
  };

  const [fontsLoaded] = useFonts({
    "Inter-var": require("./assets/fonts/Inter.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  if (!userInfo) {
    return (
      <View
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ marginBottom: 20 }}>
          You need to log in in order to use this app
        </Text>
        <Button
          title={"Sign in with Google"}
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
        />
      </View>
    );
  }

  const relayEnvironment: Environment = createNewRelayEnvironment();

  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <UserContext.Provider value={userInfo}>
        <NavigationContainer>
          <RootStack.Navigator
            initialRouteName={"Home"}
            screenOptions={{ headerShown: false }}
          >
            <RootStack.Group>
              <RootStack.Screen name="Root" component={MainScreen} />
            </RootStack.Group>
            <RootStack.Group
              screenOptions={{
                presentation: "modal",
                headerShown: true,
                title: "Quote",
              }}
            >
              <RootStack.Screen name="QuoteModal" component={QuoteModal} />
            </RootStack.Group>
          </RootStack.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    </RelayEnvironmentProvider>
  );
}
