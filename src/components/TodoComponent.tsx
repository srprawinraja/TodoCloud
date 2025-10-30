import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./TodoComponent.style";
import { useState } from "react";
import {Todo, TodoProps} from "../types/Todo";

export default function TodoComponent({
  id,
  todoName,
  todoStatus,
  onDelete,
  onChangeStatus,
}:TodoProps) {
  const [status, setStatus] = useState<boolean>(todoStatus);

  return (
    <TouchableOpacity
      style={styles.todoUi}
      onPress={() => {
        setStatus((status) => !status);
        onChangeStatus(id);
      }}
    >
      <Image
        style={styles.statusIconUi}
        source={{
          uri: status
            ? "https://img.icons8.com/?size=100&id=12402&format=png&color=FD7E14"
            : "https://img.icons8.com/?size=100&id=37375&format=png&color=737373",
        }}
      />
      <Text style={{ fontSize: 17, fontWeight: "400" }}>{todoName}</Text>
      <TouchableOpacity
        style={{ marginLeft: "auto" }}
        onPress={() => {
          onDelete(id);
        }}
      >
        <Image
          style={styles.deleteIconUi}
          source={{
            uri: "https://img.icons8.com/?size=100&id=95771&format=png&color=4D4D4D",
          }}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
