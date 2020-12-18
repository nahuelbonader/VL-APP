import { StyleSheet } from "react-native";
import colors from "./colors";
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
  viewStyle: {
    height: normalize(200),
    flexDirection: "row",
    marginVertical: normalize(12),
    width: "95%",
    alignSelf: "center",
  },
  image: {
    borderRadius: normalize(20),
    flex: 1,
    marginLeft: normalize(10),
    marginRight: normalize(10),
    marginTop: normalize(5),
    shadowColor: "black",
  },
  viewProfile: {
    flexDirection: "row",
    marginHorizontal: normalize(30),
    textAlign: "center",
    alignSelf: "center",
    marginRight: normalize(50),
  },
  profilePic: {
    width: normalize(30),
    height: normalize(30),
    borderRadius: normalize(50),
  },
  name: {
    marginLeft: normalize(10),
    color: "green",
    top: normalize(3),
    fontSize: normalize(20),
    fontWeight: "200",
  },
  viewThree: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
    borderRadius: normalize(25),
    backgroundColor: "white",
    paddingBottom: normalize(20),
    marginTop: normalize(5),
  },
  title: {
    marginTop: normalize(15),
    marginBottom: normalize(15),
    color: "green",
    fontSize: normalize(19),
    textAlign: "center",
    alignSelf: "center",
    fontWeight: "300",
    textTransform: "uppercase",
  },
  text: {
    textTransform: "uppercase",
    color: "green",
    fontSize: normalize(16),
    marginTop: normalize(15),
    marginBottom: normalize(10),
    marginLeft: normalize(10),
    marginRight: normalize(10),
    fontWeight: "300",
  },
  textTwo: {
    color: "black",
    fontSize: normalize(13),
    marginBottom: normalize(5),
    textAlign: "justify",
    marginLeft: normalize(10),
    marginRight: normalize(10),
    fontWeight: "300",
  },
  favButton: {
    width: normalize(43),
    height: normalize(43),
    backgroundColor: "white",
    borderRadius: normalize(50),
    position: "absolute",
    right: normalize(30),
    top: normalize(140),
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  favIcon: {
    alignSelf: "center",
    top: normalize(11),
    fontSize: normalize(25),
  },
});

export default styles;
