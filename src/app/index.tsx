import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text, ActivityIndicator, Image } from "react-native";
import { FIREBASE_AUTH } from "./service/firebaseConfig";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();

  const signIn = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      navigation.navigate("list");
      showToast("success", "Bem-Vindo a sua conta!!!");
    } catch (error) {
      setLoading(false);
      showToast("error", "Registro inválido!", "Suas credenciais estão incorretas");
    }
  };

  const handleForgetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      showToast("info", "Redefinição de senha", "Enviamos um email para você");
    } catch (error) {
      showToast("error", "Erro", "Desculpe, algo deu errado");
    }
  };

  const showToast = (type: string, text1: string, text2?: string) => {
    Toast.show({
      type: type,
      text1: text1,
      text2: text2 || undefined, 
    });
  };
  

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/Logo.png")} />
      <Text style={styles.title}>Login do Usuário</Text>
      <TextInput
        value={email}
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Digite a senha"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.iconButton}
        >
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            color="#DCDCD0"
            size={23}
          />
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#A3E635" />
      ) : (
        <>
          <TouchableOpacity style={styles.loginButton} onPress={signIn}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("register")}
            activeOpacity={0.7}
          >
            <Text style={styles.createAccountText}>Cadastre-se</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForgetPassword} activeOpacity={0.7}>
            <Text style={styles.password}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </>
      )}
      <Toast />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    position: "relative",
  },
  input: {
    marginVertical: 12,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    backgroundColor: "#EAEAE2",
    width: "100%",
  },
  loginButton: {
    backgroundColor: "#A3E635",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
  loginButtonText: {
    color: "#000000",
    fontSize: 18,
  },
  createAccountText: {
    marginTop: 15,
    textAlign: "center",
    color: "#095BF9",
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  password: {
    marginTop: 15,
    textAlign: "center",
    color: "#095BF9",
    fontSize: 18,
  },
  passwordContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#EAEAE2",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    borderWidth: 1,
  },
  inputPassword: {
    flex: 1,
    height: 50,
    padding: 8,
    borderRadius: 10,
    paddingHorizontal: 16,
  },
  iconButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
