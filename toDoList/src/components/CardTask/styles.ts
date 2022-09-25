import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.colors.base.gray[500],
    width: "100%",
    height: 64,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 8,
    marginTop: 5,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: THEME.colors.base.gray[400],
  },
  checkbox: {
    borderRadius: 50,
    marginLeft: 15,
    marginRight: 15,
  },
  text: (isChecked: any) => ({
    flex: 1,
    color: THEME.colors.base.gray[100],
    fontFamily: THEME.fonts.description,
    fontSize: THEME.fontSizes.sm,
    textDecorationLine: isChecked ? "line-through" : "none",
  }),
  trash: {
    marginRight: 15,
  },
});
