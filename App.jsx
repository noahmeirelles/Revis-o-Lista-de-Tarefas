import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [task, setTask] = useState('')
  const [list, setList] = useState([])
  const addTask = () => {
    if (task.trim().length > 0) {
      setList([...list, { id: Math.random().toString(), value: task }]);
      setTask("");
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          placeholder="Digite uma nova tarefa"
          style={styles.input}
          onChangeText={setTask}
          value={task}
        />
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <Text >Adicionar</Text>

        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {list.map((task) => (
          <View
            key={task.id}

          >
            <Text >{task.value}</Text>
            <TouchableOpacity
              onPress={() => removeTask(task.id)}

            >
              <Text className={`text-white`}>Remover</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View >
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6
  },
  input: {
    padding: 10,
    borderBlockColor: '#000',
    borderBottomWidth: 1,
    borderBottomColor: 1,
    width: '75%'
  },
  addButton: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 5
  }
});
