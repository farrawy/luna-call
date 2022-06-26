import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

const cameraOn = false;
const micOn = false;

const CallActionBox = () => {
  // useState constants
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);

  // functions
  const onReverseCamera = () => {};
  const onToggleCamera = () => {
    setIsCameraOn((currentValue) => !isCameraOn);
  };
  const onToggleMicrophone = () => {
    setIsMicOn((currentValue) => !isMicOn);
  };
  const onHangup = () => {};

  return (
    <View style={styles.buttonsContainer}>
      <Pressable onPress={onReverseCamera} style={styles.iconButton}>
        <MaterialIcons name="camera-flip" size={30} color={"white"} />
      </Pressable>

      <Pressable onPress={onToggleCamera} style={styles.iconButtonSelected}>
        <MaterialIcons
          name={isCameraOn ? "camera-off" : "camera"}
          size={30}
          color={"white"}
        />
      </Pressable>

      <Pressable onPress={onToggleMicrophone} style={styles.iconButtonSelected}>
        <MaterialIcons
          name={isMicOn ? "microphone-off" : "microphone"}
          size={30}
          color={"white"}
        />
      </Pressable>

      <Pressable
        onPress={onHangup}
        style={[styles.iconButton, { backgroundColor: "red" }]}
      >
        <MaterialIcons name="phone-hangup" size={30} color={"white"} />
      </Pressable>
    </View>
  );
};

export default CallActionBox;

const styles = StyleSheet.create({
  buttonsContainer: {
    backgroundColor: "#333",
    padding: 20,
    paddingBottom: 40,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  iconButton: {
    backgroundColor: "#4a4a4a",
    padding: 10,
    borderRadius: 40,
  },
  iconButtonSelected: {
    backgroundColor: "#555",
    padding: 10,
    borderRadius: 40,
  },
});
