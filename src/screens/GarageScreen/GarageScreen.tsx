import { View, Text } from "react-native";
import React from "react";
import { styles } from "./GaraScreenStyle";

import { SafeAreaView } from "react-native-safe-area-context";
import CardView from "../../components/CardView/CardView";

export default function GarageScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cameraBox}>
        <View style={styles.triangleLeftTopCorner}></View>
        <View
          style={[
            styles.triangleLeftTopCorner,
            { top: 0, right: 0, transform: [{ rotate: "90deg" }] },
          ]}
        ></View>
        <View
          style={[
            styles.triangleLeftTopCorner,
            { bottom: 0, right: 0, transform: [{ rotate: "180deg" }] },
          ]}
        ></View>
        <View
          style={[
            styles.triangleLeftTopCorner,
            { bottom: 0, left: 0, transform: [{ rotate: "-90deg" }] },
          ]}
        ></View>
        <CardView />
      </View>
    </View>
  );
}
