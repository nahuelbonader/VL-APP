import { StyleSheet } from "react-native";
import colors from "./colors";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.background,
  },
  results: {
    flex: 9.5,
    width: "100%",
    alignItems: "center",
  },
  list: {
    width: "100%",
  },
});
