import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

interface Props {
  numberTasks: number;
}

export function Counter({ numberTasks }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{numberTasks}</Text>
    </View>
  );
}
