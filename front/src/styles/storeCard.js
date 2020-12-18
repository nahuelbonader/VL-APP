import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import colors from "./colors";

const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: colors.mediumGray,
    alignContent: "center",
    justifyContent: "center",
    marginTop: "5%",
    borderRadius: 20,
    width: "95%",
    alignSelf: "center",
  },
  subcontainer1: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "7%",
  },
  listContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "3%",
    paddingRight: "3%",
    backgroundColor: colors.mediumGray,
    borderTopColor: colors.darkGray,
    borderTopWidth: 0.5,
    borderBottomColor: colors.darkGray,
    borderBottomWidth: 0.5,
    borderRadius: 20,
  },
  upper: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginLeft: "10%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "300",
    color: colors.font,
    textTransform: "uppercase",
  },
  image: {
    flexDirection: "row",
    height: 75,
    width: 75,
    borderRadius: 50,
    backgroundColor: colors.background,
  },
  productContainer: {
    height: "95%",
    width: normalize(90),
    borderRadius: 10,
  },
  products: {
    height: "95%",
    width: "85%",
    borderRadius: 20,
  },
  info: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  address: {
    fontSize: 12,
    fontWeight: "300",
    textTransform: "uppercase",
    marginLeft: "10%",
    marginTop: "2%",
    maxWidth: "80%",
  },
  open: {
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "200",
    fontSize: 16,
    color: colors.font,
  },
  icon: {
    alignItems: "center",
    flexDirection: "row",
  },
  noProducts: {
    marginLeft: "15%",
    marginRight: "10%",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "300",
    textTransform: "uppercase",
  },
});

export default styles;
