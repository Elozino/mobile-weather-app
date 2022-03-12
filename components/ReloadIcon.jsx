import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const ReloadIcon = ({ load }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="md-refresh" size={20} color="#fff" onPress={load} />
    </View>
  );
};

export default ReloadIcon;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 80,
    right: "-45%",
    height: 50,
    width: 100,
  },
});
