import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login App (Apellido, Apellido)</Text>

      <Image source={require('./assets/coca-cola-logo.png')} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="simon@galaxies.dev"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="********"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>INGRESAR</Text>
      </TouchableOpacity>

      <Text style={styles.link}>¿Olvidaste la clave?</Text>
      <Text style={styles.link}>Crear Cuenta</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#6C2BD9',
    padding: 10,
    width: '100%',
    textAlign: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 250,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
    backgroundColor: '#eee',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#B692F6',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#9F4BF2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  link: {
    color: '#333',
    marginTop: 5,
    textDecorationLine: 'underline',
  },
});

export default App;
