import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  Alert,
} from "react-native";
import { CardTask } from "../../components/CardTask";
import { Counter } from "../../components/Counter/intex";
import { Header } from "../../components/Header";
import { ListEmpty } from "../../components/ListEmpty";
import { THEME } from "../../styles/theme";

import { styles } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [tasksName, setTasksName] = useState("");

  function handleAddTask() {
    setTasks((prevState) => [...prevState, tasksName]);
    setTasksName("");
  }

  function handleRemoveTask(taskDescription: string) {
    Alert.alert("Remover", `Deseja remover essa tarefa?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((tasks) => tasks !== taskDescription)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

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
            onChangeText={setTasksName}
            value={tasksName}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Image source={require("../../assets/ButtonPlus.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.tasksInfo}>
          <View style={styles.info}>
            <Text style={styles.infoCreatedText}>Criadas</Text>
            <Counter numberTasks={"0"} />
          </View>
          <View style={styles.info}>
            <Text style={styles.infoDone}>Concluídas</Text>
            <Counter numberTasks={"0"} />
          </View>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <CardTask
              taskDescription={item}
              onRemove={() => handleRemoveTask(item)}
            />
          )}
          ListEmptyComponent={() => <ListEmpty />}
        />
      </View>
    </>
  );
}
