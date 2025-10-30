import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export default StyleSheet.create({
  containerUi: {
    backgroundColor: colors.BACKGROUND_COLOR,
    flex: 1,
    padding:20
  },
  scrollUi: {
    marginTop: 35,
  },
  addButtonUi: {
    position: "absolute",
    fontSize: 30,
    borderRadius: 50,
    height: 55,
    width: 100,
    padding: 20,
    backgroundColor: "#fd7e14",
    alignSelf: "flex-end",
  },
  addButtonTextUi: { flex: 1, textAlign: "center", color: 'white'  },
  titleUi: { color: "#00008B", fontSize: 25, fontWeight: "bold" },
  tinyLogoUi: {
    width: 70,
    height: 70,
  },
  topBarUi: { flexDirection: "row", alignItems: "center", marginLeft: 10 },
  inputUi: {
    backgroundColor: "#CDC9CA",
    borderRadius: 50,
    height: 55,
    padding: 15,
    paddingLeft: 25,
  },
});
