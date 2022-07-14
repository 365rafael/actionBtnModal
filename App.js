import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import { ActionModal } from "./src/ActionModal";

export default function App() {
  const [visibleModal, setVisibleModal] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Action Modal</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setVisibleModal(true)}
      >
        <Text>Abrir</Text>
      </TouchableOpacity>

      <Modal
        visible={visibleModal}
        transparent={true}
        onRequestClose={() => setVisibleModal(false)}
        animationType="fade"
      >
        <ActionModal
          handleClose={() => setVisibleModal(false)}
          handleEdit={() => alert("Clicou em editar")}
          handleDelete={() => alert("Clicou em excluir")}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#12131B",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#fff",
    padding: 4,
    marginVertical: 8,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});
