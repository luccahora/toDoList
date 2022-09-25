import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: THEME.colors.base.gray[400],
  },
  image :{
    marginTop:35,
  },
  title: {
    color: THEME.colors.base.gray[300],
    fontFamily: THEME.fonts.title,
    marginBottom: 5,
    marginTop: 30,
  },
  subtitle: {
    color: THEME.colors.base.gray[300],
    fontFamily: THEME.fonts.description,
  },
});
