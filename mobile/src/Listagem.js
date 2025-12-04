import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Listagem() {
  const navigation = useNavigation();
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  async function Get() {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://proweb.leoproti.com.br/alunos",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      setInfo(response.data);
    } catch (error) {
      console.error("Erro ao buscar alunos:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    Get();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18 }}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F5F5F5",
        paddingTop: 50,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 20 }}>
        Lista de Alunos
      </Text>

      <FlatList
        data={info}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View
            style={{
              width: 350,
              backgroundColor: "#FFF",
              padding: 15,
              marginBottom: 15,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOpacity: 0.2,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 4,
              elevation: 3,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "500" }}>{item.nome}</Text>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Detalhes", {
                  id: item.id,
                  nome: item.nome,
                  turma: item.turma,
                  curso: item.curso,
                  matricula: item.matricula,
                })
              }
              style={{
                backgroundColor: "#000",
                paddingVertical: 6,
                paddingHorizontal: 12,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "#FFF", fontWeight: "600" }}>Detalhes</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}