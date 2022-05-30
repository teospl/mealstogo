import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { Navigation } from "./src/infrastructure/navigation";

import * as firebase from "firebase/compat";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyAzUuBBLzuskiiQt_fsR_DkAQu6QztDWoI",
  authDomain: "mealstogo-5336c.firebaseapp.com",
  projectId: "mealstogo-5336c",
  storageBucket: "mealstogo-5336c.appspot.com",
  messagingSenderId: "979318766396",
  appId: "1:979318766396:web:741096f20ce96c56aa7c39",
};

//if (!firebase.app.length) {
firebase.initializeApp(firebaseConfig);
//}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  //if (!isAuthenticated) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
