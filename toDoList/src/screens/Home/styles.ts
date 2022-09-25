import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.base.gray[600],
    paddingHorizontal: 20,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: "-7%",
    marginBottom: 35,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: THEME.colors.base.gray[500],
    borderRadius: 5,
    color: THEME.colors.base.gray[100],
    padding: 16,
    fontSize: 16,
    marginRight: 12,
    borderWidth: 1,
    borderColor: THEME.colors.base.gray[700],
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 52,
    backgroundColor: THEME.colors.product.blueDark,
    borderRadius: 6,
  },
  tasksInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: THEME.colors.base.gray[400],
    borderBottomWidth: 1,
  },
  info: {
    flexDirection: "row",
    justifyContent: "center",
  },
  counter: {
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
  infoCreatedText: {
    fontFamily: THEME.fonts.title,
    fontSize: THEME.fontSizes.md,
    color: THEME.colors.product.blueDark,
    marginBottom: 22,
  },
  infoDone: {
    fontFamily: THEME.fonts.title,
    fontSize: THEME.fontSizes.md,
    color: THEME.colors.product.purpleDark,
  },
});
