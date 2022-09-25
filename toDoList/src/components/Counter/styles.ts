import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 25,
    height: 19,
    backgroundColor: THEME.colors.base.gray[400],
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  counterText: {
    fontFamily: THEME.fonts.title,
    fontSize: THEME.fontSizes.xs,
    color: THEME.colors.base.gray[100],
  },
});
