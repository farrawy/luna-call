import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => {};
  return (
    <View style={styles.page}>
      <TextInput
        placeholder="username"
        style={styles.input}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="password"
        style={styles.input}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={signIn}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
    alignItems: "stretch",
    flex: 1,
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "dodgerblue",
    marginVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
});
