import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

export default function Perfil() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [rm, setRm] = useState("");

  // Recupera os dados do usuário salvo
  useEffect(() => {
    async function CarregarPerfil() {
      let data = await AsyncStorage.getItem("USUARIOS");
      if (data != null) {
        let dadosSalvos = JSON.parse(data);
        setNome(dadosSalvos.nomeUsuario);
        setRm(dadosSalvos.rmUsuario);
      }
    }
    CarregarPerfil();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../assets/perfil.jpeg")}
          style={styles.foto}
        />

        <Text style={styles.label}>Nome</Text>
        <Text style={styles.valor}>{nome || "Não informado"}</Text>

        <View style={styles.divider} />

        <Text style={styles.label}>RM</Text>
        <Text style={styles.valor}>{rm || "Não informado"}</Text>

        <View style={styles.divider} />

        <TouchableOpacity
          style={styles.btn}
          onPress={() => router.push("/cadastro")}
        >
          <Text style={styles.btnText}> Editar Cadastro</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#646464",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    width: 320,
    gap: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },

  foto: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: "#000000",
  },

  label: {
    fontSize: 12,
    color: "#888",
    fontWeight: "600",
    alignSelf: "flex-start",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  valor: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e1e1e",
    alignSelf: "flex-start",
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
    width: "100%",
    marginVertical: 4,
  },

  btn: {
    marginTop: 15,
    height: 50,
    width: "100%",
    borderRadius: 15,
    backgroundColor: "#c1e61f",
    alignItems: "center",
    justifyContent: "center",
  },

  btnText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#1e1e1e",
  },
});