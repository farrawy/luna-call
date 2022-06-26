import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";


// * Screens
import ContactsScreen from "./src/screens/ContactsScreen/contactsScreen";
import CallingScreen from "./src/screens/CallingScreen/callingScreen";
import IncomingCallScreen from "./src/screens/IncomingCallScreen/incomingCallScreen";
import CallScreen from "./src/screens/CallScreen/callScreen";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <Navigation />
    </>
  );
}

const styles = StyleSheet.create({});
