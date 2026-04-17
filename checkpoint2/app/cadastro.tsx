import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { MaskedTextInput } from "react-native-mask-text";
import { useRouter } from "expo-router";

export default function Cadastro() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [rm, setRm] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");

  const [usuarioEditado, setUsuarioEditado] = useState(false);

  // Recupera dados salvos ao abrir o app
  useEffect(() => {
    async function CarregarUsuario() {
      let data = await AsyncStorage.getItem("USUARIOS");
      if (data != null) {
        let dadosSalvos = JSON.parse(data);
        setNome(dadosSalvos.nomeUsuario);
        setRm(dadosSalvos.rmUsuario);
        setTelefone(dadosSalvos.telUsuario);
        setCpf(dadosSalvos.cpfUsuario);
        setUsuarioEditado(true);
      }
    }
    CarregarUsuario();
  }, []);

  async function SalvarUsuario() {
    // Validação de campos obrigatórios
    if (!nome || !rm || !telefone || !cpf) {
      Alert.alert("Atenção", "Preencha todos os campos antes de continuar.");
      return;
    }

    let usuarioAtualizado = {
      nomeUsuario: nome,
      rmUsuario: rm,
      telUsuario: telefone,
      cpfUsuario: cpf,
    };

    await AsyncStorage.setItem("USUARIOS", JSON.stringify(usuarioAtualizado));

    Alert.alert(
      "Sucesso",
      usuarioEditado ? "Usuário atualizado!" : "Usuário cadastrado!"
    );

    // Navega para a tela de perfil após salvar
    router.push("/perfil");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo</Text>

        <Text style={styles.subtitle}>Sistema de Cadastro de Usuário</Text>

        <Text style={styles.description}>
          Aqui você poderá registrar suas informações de forma rápida e segura.
        </Text>

        <Text style={styles.description}>
          Preencha seus dados corretamente para acessar seu perfil completo.
        </Text>

        <View style={styles.camp}>
          <MaskedTextInput
            placeholder="Nome"
            style={styles.input}
            value={nome}
            onChangeText={(text) => setNome(text)}
          />

          <MaskedTextInput
            type="custom"
            options={{
              mask: "AA999999",
            }}
            placeholder="RM"
            style={styles.input}
            value={rm}
            onChangeText={(text) => setRm(text)}
          />

          <MaskedTextInput
            type="custom"
            options={{
              mask: "(99) 9 9999-9999",
            }}
            placeholder="Telefone"
            style={styles.input}
            value={telefone}
            onChangeText={(text) => setTelefone(text)}
            keyboardType="numeric"
          />

          <MaskedTextInput
            type="custom"
            options={{
              mask: "999.999.999-99",
            }}
            placeholder="CPF"
            style={styles.input}
            value={cpf}
            onChangeText={(text) => setCpf(text)}
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.btn} onPress={SalvarUsuario}>
            <Text style={styles.btnText}>
              {usuarioEditado ? "ATUALIZAR" : "CADASTRAR"}
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.highlight}>
          Dados seguros, Navegação simples e Experiência rápida.
        </Text>
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

  content: {
    alignItems: "center",
    gap: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e1e1e",
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },

  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#444",
  },

  highlight: {
    fontSize: 14,
    textAlign: "center",
    color: "#1e1e1e",
    marginTop: 10,
    fontWeight: "500",
  },

  camp: {
    gap: 5,
  },

  input: {
    borderWidth: 1,
    height: 38,
    width: 300,
    padding: 10,
    borderRadius: 15,
    marginVertical: 3,
    backgroundColor: "#fff",
  },

  btn: {
    height: 50,
    width: 300,
    borderRadius: 15,
    backgroundColor: "#c1e61f",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 3,
  },

  btnText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#1e1e1e",
  },
});