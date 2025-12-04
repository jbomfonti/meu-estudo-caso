import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Detalhes() {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params;

  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function ById() {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://proweb.leoproti.com.br/alunos/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setInfo(response.data);
      setError(false);
    } catch (error) {
      console.log("ERRO", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    ById();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Erro ao carregar informações do aluno</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!info) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Nenhuma informação encontrada</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Informações do Aluno</Text>

        <View style={styles.infoRow}>
          <Text style={styles.label}>ID:</Text>
          <Text style={styles.value}>{info.id}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.value}>{info.nome}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Turma:</Text>
          <Text style={styles.value}>{info.turma}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Curso:</Text>
          <Text style={styles.value}>{info.curso}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Matrícula:</Text>
          <Text style={styles.value}>{info.matricula}</Text>
        </View>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 25,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
    color: "#333",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
  },
  value: {
    fontSize: 16,
    fontWeight: "400",
    color: "#333",
    flex: 1,
    textAlign: "right",
  },
  backButton: {
    marginTop: 25,
    backgroundColor: "#000",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  backButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },
  errorText: {
    fontSize: 16,
    color: "#E74C3C",
    marginBottom: 20,
    textAlign: "center",
  },
});