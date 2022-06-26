import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import bg from "../../../assets/images/ios_bg.png";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
const IncomingCallScreen = () => {
  const onDecline = () => {
    console.warn("Declined");
  };

  const onAccept = () => {
    console.warn("Accepted");
  };
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <Text style={styles.name}>Ahmed</Text>
      <Text style={styles.phoneNumber}>Incoming Video Call</Text>

      <View style={[styles.row, { marginTop: "auto" }]}>
        <View style={styles.iconsContainer}>
          <Ionicons name="alarm" color="white" size={30} />
          <Text style={styles.iconText}>Remind Me</Text>
        </View>
        <View style={styles.iconsContainer}>
          <Entypo name="message" color="white" size={30} />
          <Text style={styles.iconText}>Message</Text>
        </View>
      </View>

      <View style={styles.row}>
        {/* Decline Button */}
        <Pressable onPress={onDecline} style={styles.iconsContainer}>
          <View style={styles.iconButtonContainer}>
            <Feather name="x" color="white" size={40} />
          </View>
          <Text style={styles.iconText}>Decline</Text>
        </Pressable>

        {/* Accept Button */}
        <Pressable onPress={onAccept} style={styles.iconsContainer}>
          <View
            style={[styles.iconButtonContainer, { backgroundColor: "#2e7bff" }]}
          >
            <Entypo name="check" color="white" size={40} />
          </View>
          <Text style={styles.iconText}>Accept</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default IncomingCallScreen;

const styles = StyleSheet.create({
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
  bg: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    paddingBottom: 30, 
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconsContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  iconText: {
    color: "white",
    marginTop: 10,
  },
  iconButtonContainer: {
    backgroundColor: "red",
    borderRadius: 50,
    padding: 15,
    margin: 10,
  },
});
