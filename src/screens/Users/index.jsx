import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import axios from "axios";

import styles from "./styles";
import Title from "../../components/Title";

export default function Users() {
  const [users, setUsers] = useState([]);

  const apiURL =
    "https://969f-2804-868-d040-6cce-d27-101d-1f67-b338.ngrok-free.app/users";

  const fetchUsers = async () => {
    try {
      const response = await axios.get(apiURL);
      setUsers(response.data.users);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Title title="Usuários" />

      {users ? (
        <View style={styles.users}>
          {users.map((user) => (
            <View key={user.id} style={styles.user}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userEmail}>{user.email}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text style={styles.loading}>Carregando...</Text>
      )}
    </View>
  );
}
