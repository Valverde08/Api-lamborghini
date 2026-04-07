import { View, Text, Image, Button } from "react-native";
import { styles } from "./CardViewStyles";

import Logo from "../../../assets/logo.png";
import { CAR_ASSETS_BASE_URL } from "../../Constants/Car";
import BuyButton from "../BuyButton/BuyButton";
import { useEffect, useState } from "react";
import { carModel } from "./Props";
import { loadingCarData } from "./Actions";

export default function CardView() {
  const [carData, setCarData] = useState<carModel | null>(null);

  useEffect(() => {
    (async () => {
      await loadingCarData(2, setCarData);
      console.log(carData);
    })();
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
      <Text style={styles.carName}>MODEL</Text>
    </View>
  );

  const renderCarImage = () => (
    <Image
      style={styles.imageCar}
      source={{
        uri: `${CAR_ASSETS_BASE_URL}1.png`,
      }}
    />
  );

  const renderPriceControls = () => (
    <View style={styles.priceLabelContainer}>
      <Button title="<" color={"#01a6b3"} onPress={() => {}} />
      <Text style={styles.priceLabel}>Valor</Text>
      <Button title=">" color={"#01a6b3"} onPress={() => {}} />
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
