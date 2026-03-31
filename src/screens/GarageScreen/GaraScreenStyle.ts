import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#1e1e20",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraBox: {
    position: "relative",
    width: 350,
    height: "90%",
    borderWidth: 2,
    borderColor: "#fff",
    overflow: "hidden",
    borderRadius: 10,
  },
  triangleLeftTopCorner: {
    position: "absolute",
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderTopWidth: 20,
    borderTopColor: "#fff",
    borderRightWidth: 20,
    borderRightColor: "transparent",
  },
});
