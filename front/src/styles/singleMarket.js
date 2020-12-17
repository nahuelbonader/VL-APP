import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";


const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 30,
  },
  banner: {
    height: 100,
    width: "100%",
    height: 200,
    flex: 1.3,
    marginBottom: normalize(30),
  },
  title: {
    fontSize: 25,
    fontWeight: "200",
    marginTop: 20,
    textAlign: "center",
    textTransform: "uppercase",
  },
  address: {
    fontSize: 15,
    fontWeight: "200",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 5,
  },
  image: {
    height: 110,
    width: 110,
    borderRadius: 50,
    marginTop: 20,
    alignSelf: "center",
  },
  info: {
    flexDirection: "row",
    justifyContent: "center",
  },
  productName: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "200",
  },
  location: {
    height: 10,
    width: 10,
  },
  hour: {
    fontSize: 15,
    fontWeight: "200",
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default styles;
