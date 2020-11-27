import { StyleSheet } from "react-native";
import colors from "./colors";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  container: {
    flex: 3.5,
    width: "100%",
    margin: normalize(25),
    alignItems: "center",
  },
  logo: {
    height: "70%",
    width: "80%",
  },
  text: {
    fontSize: normalize(25),
    marginTop: normalize(15),
    color: colors.font,
    textShadowColor: colors.details,
    textShadowOffset: { width: normalize(0), height: normalize(4) },
    textShadowRadius: normalize(5),
  },
});
