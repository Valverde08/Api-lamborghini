import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./BuyButtonStyles";
import AntDesign from "@react-native-vector-icons/evil-icons";

export default function BuyButton() {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="cart" size={24} color="black" style={styles.icon} />
        <Text style={styles.textButton}>Buy This</Text>
      </TouchableOpacity>
    </View>
  );
}
