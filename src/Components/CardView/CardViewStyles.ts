import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    overflow: "hidden",
    borderRadius: 10,
  },
  imageLogo: {
    alignItems: "center",
    width: "65%",
    resizeMode: "contain",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  containerDivider: {
    alignItems: "center",
  },
  divider: {
    alignItems: "center",
    height: 1,
    width: "80%",
    marginVertical: 10,
    backgroundColor: "#01abb2",
  },
  carBrand: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 18,
    fontStyle: "italic",
  },
  carName: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  imageCar: {
    flex: 1,
    resizeMode: "contain",
  },
  priceLabelContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20,
  },
  priceLabel: {
    color: "#fff",
    fontSize: 20,
  },
});
