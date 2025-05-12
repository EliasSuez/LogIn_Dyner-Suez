import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  // Estados para almacenar los valores de los inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el login (aún sin conexión a ningún backend)
  const handleLogin = () => {
    // Aquí podrías hacer una validación o llamada a una API
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)} // Actualiza el estado de email
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry // Hace que el input sea para contraseñas
        value={password}
        onChangeText={(text) => setPassword(text)} // Actualiza el estado de password
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default App;
