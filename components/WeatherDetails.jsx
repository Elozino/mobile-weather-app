import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../utils";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const { PRIMARY_COLOR, BORDER_COLOR } = colors;

const WeatherDetails = ({ currentWeather, unitsSystem }) => {
  const {
    main: { feels_like, humidity, pressure },
    wind: { speed },
  } = currentWeather;

  const windSpeed =
    unitsSystem === "metric"
      ? `${Math.round(speed)}m/s`
      : `${Math.round(speed)}miles/hr`;
  return (
    <View style={styles.container}>
      <View style={styles.weatherDetailsWrapper}>
        <View
          style={[
            styles.weatherDetailsBox,
            { borderRightWidth: 1, borderRightColor: BORDER_COLOR },
          ]}
        >
          <View style={styles.weatherDetailsWrapper}>
            <FontAwesome5
              name="temperature-low"
              color={PRIMARY_COLOR}
              size={20}
            />
            <View>
              <Text style={styles.weatherDetailsItem}>Feels Like</Text>
              <Text
                style={{
                  ...styles.weatherDetailsItem,
                  color: "grey",
                  fontSize: 20,
                  marginTop: 2,
                }}
              >
                {feels_like}°
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsWrapper}>
            <MaterialCommunityIcons
              name="air-humidifier"
              color={PRIMARY_COLOR}
              size={28}
            />
            <View>
              <Text style={styles.weatherDetailsItem}>Humidity</Text>
              <Text
                style={{
                  ...styles.weatherDetailsItem,
                  color: "grey",
                  fontSize: 20,
                  marginTop: 2,
                }}
              >
                {humidity}%
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          ...styles.weatherDetailsWrapper,
          borderTopWidth: 1,
          borderTopColor: BORDER_COLOR,
        }}
      >
        <View
          style={[
            styles.weatherDetailsBox,
            { borderRightWidth: 1, borderRightColor: BORDER_COLOR },
          ]}
        >
          <View style={styles.weatherDetailsWrapper}>
            <MaterialCommunityIcons
              name="weather-windy-variant"
              size={28}
              color={PRIMARY_COLOR}
            />
            <View>
              <Text style={styles.weatherDetailsItem}>Wind Speed</Text>
              <Text
                style={{
                  ...styles.weatherDetailsItem,
                  color: "grey",
                  fontSize: 20,
                  marginTop: 2,
                }}
              >
                {windSpeed}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsWrapper}>
            <MaterialCommunityIcons
              name="speedometer"
              color={PRIMARY_COLOR}
              size={28}
            />
            <View>
              <Text style={styles.weatherDetailsItem}>Pressure</Text>
              <Text
                style={{
                  ...styles.weatherDetailsItem,
                  color: "grey",
                  fontSize: 20,
                  marginTop: 2,
                }}
              >
                {pressure} hPa
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WeatherDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "auto",
    margin: 15,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 10,
  },
  weatherDetailsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 20,
  },
  weatherDetailsItem: {
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
});
