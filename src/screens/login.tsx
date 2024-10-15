import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { TextInput, Button, IconButton } from "react-native-paper";
import theme from "../styles/theme";
import styles from "../styles/loginStyle";

const mascote = require('../../assets/Mascote-Metro-SP 3.png');
const logo = require('../../assets/Metro logo.png');

export default function Login() {
  const [funcional, setFuncional] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleLogin = () => {
    console.log("Funcional:", funcional);
    console.log("Senha:", senha);
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <Image source={mascote} style={styles.mascote}/>
      <Text style={styles.title}>Entre na sua conta</Text>
      <Text style={styles.subtitle}>Bem vindo ao sistema!</Text>
      <TextInput
        label="Funcional"
        value={funcional}
        onChangeText={(text) => setFuncional(text)}
        style={styles.input}
        mode="outlined"
        theme={theme}
      />
      <TextInput
        label="Senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
        style={styles.input}
        secureTextEntry={!mostrarSenha}
        mode="outlined"
        right={
          <TextInput.Icon
            icon={mostrarSenha ? "eye-off" : "eye"}
            onPress={() => setMostrarSenha(!mostrarSenha)}
          />
        }
        theme={theme}
      />
      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.button}
        labelStyle={styles.buttonLabel}
      >
        Entrar
      </Button>
    </View>
  );
}
