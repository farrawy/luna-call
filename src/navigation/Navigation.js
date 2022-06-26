import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Screens
import ContactsScreen from "../screens/ContactsScreen/contactsScreen";
import CallingScreen from "../screens/CallingScreen/callingScreen";
import IncomingCallScreen from "../screens/IncomingCallScreen/incomingCallScreen";
import CallScreen from "../screens/CallScreen/callScreen";

const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Contacts" component={ContactsScreen} />
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Calling" component={CallingScreen} />
          <Stack.Screen name="IncomingCall" component={IncomingCallScreen} />
          <Stack.Screen name="Call" component={CallScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
