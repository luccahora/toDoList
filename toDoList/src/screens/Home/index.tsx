import React from "react";
import { View, TextInput, TouchableOpacity, Image, Text } from "react-native";
import { Header } from "../../components/Header";
import { THEME } from "../../styles/theme";

import { styles } from "./styles";

export function Home() {
  const Counter = () => {
    return (
      <View style={styles.counter}>
        <Text style={styles.counterText}>0</Text>
      </View>
    );
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={THEME.colors.base.gray[300]}
            selectionColor={THEME.colors.product.purpleDark}
          />
          <TouchableOpacity style={styles.button}>
            <Image source={require("../../assets/ButtonPlus.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.tasksInfo}>
          <View style={styles.info}>
            <Text style={styles.infoCreatedText}>Criadas</Text>
            <Counter />
          </View>
          <View style={styles.info}>
            <Text style={styles.infoDone}>Concluídas</Text>
            <Counter />
          </View>
        </View>
      </View>
    </>
  );
}