import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Link, useNavigation } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "./service/firebaseConfig";
import { Ionicons } from "@expo/vector-icons";
import Toast from 'react-native-toast-message'; 

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();

  const signUp = async () => {
    setLoading(true);

    try {
      if (password !== confirmPassword) {
        Toast.show({
          type: 'error',
          text1: 'Erro',
          text2: 'As senhas não coincidem',
        });
        setLoading(false);
        return;
      }

      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      Toast.show({
        type: 'success',
        text1: 'Usuário cadastrado',
        text2: 'Usuário cadastrado com sucesso',
      });
      navigation.goBack();
    } catch (error) {
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Cadastro inválido!',
        text2: 'Por favor, tente outro cadastro',
      });
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/Logo.png")} />
      <Text style={styles.title}>Cadastro do Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
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

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Confirme a senha"
          secureTextEntry={!showPassword}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
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
          <TouchableOpacity style={styles.loginButton} onPress={signUp}>
            <Text style={styles.loginButtonText}>Cadastrar</Text>
          </TouchableOpacity>

          <Link href={"/"} asChild>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.backLogin}>Voltar para o Login</Text>
            </TouchableOpacity>
          </Link>
        </>
      )}
      <Toast />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
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
  backLogin: {
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
    marginTop: 12,
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
