import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { THEME } from "../../styles/theme";

import { styles } from "./styles";

export function CardTask() {
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
        color={
          isChecked
            ? THEME.colors.product.purpleDark
            : THEME.colors.product.blue
        }
      />
      <Text style={styles.text(isChecked)}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>
      <TouchableOpacity style={styles.trash}>
        <Image source={require("../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
