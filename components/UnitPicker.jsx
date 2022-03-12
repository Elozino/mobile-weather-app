import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";

const UnitPicker = ({ unitsSystem, setUnitsSystem }) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={unitsSystem}
        onValueChange={(item) => setUnitsSystem(item)}
        mode="dropdown"
        style={styles.pickerText}
      >
        <Picker.Item label="C" value="metric" style={styles.pickerText} />
        <Picker.Item label="F" value="imperial" style={styles.pickerText} />
      </Picker>
    </View>
  );
};

export default UnitPicker;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 60,
    left: "-30%",
    height: 50,
    width: 100,
  },
  pickerText: {
    fontSize: 20,
    color: "#744596"
  },
});
