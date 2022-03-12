import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import { colors } from "../utils";

const { PRIMARY_COLOR} = colors;
const WeatherInfo = ({ currentWeather }) => {
  const {
    main: { temp },
    weather: [details],
    name,
  } = currentWeather;

  const { icon, main, description } = details;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <View style={styles.weatherInfo}>
      <Text style={styles.cityName}>{name}</Text>
      <Image source={{ uri: iconUrl }} style={styles.icon} />
      <Text style={styles.weatherTemp}>{temp}°</Text>
      <Text style={styles.weatherDescription}>{description}</Text>
      <Text style={styles.main}>{main}</Text>
    </View>
  );
};

export default WeatherInfo;

const styles = StyleSheet.create({
  weatherInfo: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 100,
    height: 100,
  },
  weatherTemp: {
    color: PRIMARY_COLOR,
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
  },
  weatherDescription: {
    textTransform: "uppercase",
  },
  main: {
    fontSize: 18,
    fontSize: 20,
    fontWeight: "bold",
  },
  cityName: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
