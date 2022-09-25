import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { THEME } from "../../styles/theme";

import { styles } from "./styles";

interface Props {
  taskDescription: string;
  onRemove: () => void;
}

export function CardTask({ taskDescription, onRemove }: Props) {
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
      <Text style={styles.text(isChecked)}>{taskDescription}</Text>
      <TouchableOpacity style={styles.trash} onPress={onRemove}>
        <Image source={require("../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
