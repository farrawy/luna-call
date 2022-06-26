import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CallActionBox from "../../components/CallActionBox/callActionBox";
import { useNavigation, useRoute } from "@react-navigation/native";

const CallingScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const user = route?.params?.user;

  const goBack = () => {
    navigation.pop();
  };
  return (
    <View style={styles.page}>
      <Pressable onPress={goBack} style={styles.backButton}>
        <Ionicons name="chevron-back" color="white" size={25} />
      </Pressable>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>{user.user_display_name}</Text>
        <Text style={styles.phoneNumber}>ringing {user.user_number}</Text>
      </View>
      <CallActionBox />
    </View>
  );
};

export default CallingScreen;

const styles = StyleSheet.create({
  page: {
    height: "100%",
    backgroundColor: "#7b4e80",
  },
  cameraPreview: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginTop: 50,
    marginBottom: 15,
  },
  phoneNumber: {
    fontSize: 20,
    color: "#f0f0f0",
  },
  buttonsContainer: {
    backgroundColor: "#333",
    padding: 20,
    paddingBottom: 40,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
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
  backButton: {
    position: "absolute",
    zIndex: 10,
    top: 50,
    left: 10,
  },
});
