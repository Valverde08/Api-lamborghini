import { View, Text, Image, Button } from "react-native";
import { styles } from "./CardViewStyles";

import Logo from "../../../assets/logo.png";
import { CAR_ASSETS_BASE_URL } from "../../Constants/Car";
import { useEffect, useState } from "react";
import BuyButton from "../BuyButton/BuyButton";
import { carModel } from "./Props";
import {
  handlePreviousItem,
  loadingCarData,
  loadingNextCar,
  loadingPreviousCar,
} from "./Actions";

export default function CardView() {
  const [carData, setCarData] = useState<carModel | null>(null);

  useEffect(() => {
    loadingCarData(1, setCarData);
  }, []);

  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image style={styles.imageLogo} source={Logo} />
    </View>
  );

  const renderDivider = () => (
    <View style={styles.containerDivider}>
      <View style={styles.divider}></View>
    </View>
  );

  const renderCar = () => (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>{carData?.carName}</Text>
    </View>
  );

  const renderCarImage = () => (
    <Image
      style={styles.imageCar}
      source={{
        uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`,
      }}
    />
  );

  const renderPriceControls = () => (
    <View style={styles.priceLabelContainer}>
      <Button
        title="<"
        color={"#01a6b3"}
        onPress={() => loadingPreviousCar(carData, setCarData)}
      />
      <Text style={styles.priceLabel}>{carData?.price}</Text>
      <Button
        title=">"
        color={"#01a6b3"}
        onPress={() => loadingNextCar(carData, setCarData)}
      />
    </View>
  );

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}
      {renderDivider()}
      {renderCar()}
      {renderCarImage()}
      {renderDivider()}
      <BuyButton />
      {renderPriceControls()}
    </View>
  );
}
