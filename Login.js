import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { atom, useAtom } from 'jotai';
export const emailAtom = atom(['', '']);

const Login = ({ navigation }) => {
  const [pwToggle, setpwToggle] = React.useState(true);
  const [email, setEmail] = useAtom(emailAtom);

  return (
    <LinearGradient 
      colors={['#000000', 'purple']} 
      start={{ x: 0, y: 1 }} 
      end={{ x: 0, y: 0 }} 
      style={estilos.container}
    >
      <Image source={require('./logo2.png')} style={estilos.logo} />
      <Text style={estilos.titulo}>Faça Login</Text>
      
      <TextInput
        mode="outlined"
        label="Nome de Usuário"
        right={<TextInput.Icon icon="" />}
        onChangeText={(text) => setEmail([text, email[1]])}
        value={email[0]}
        style={estilos.caixaDeTexto}
      />

      <Text style={{color: 'white'}}>{email[0]}</Text>
      
      <TextInput
        mode="outlined"
        label="Senha"
        secureTextEntry={pwToggle}
        right={
          <TextInput.Icon icon="eye" onPress={() => setpwToggle(!pwToggle)} />
        }
        onChangeText={(text) => setEmail([email[0], text])}
        value={email[1]}
        style={estilos.caixaDeTexto}
      />

      <Button
        style={estilos.botao}
        icon="login"
        mode="contained"
        onPress={() => navigation.navigate('Logado')}>
        Entrar
      </Button>
    </LinearGradient>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    marginTop: 30,
  },
  caixaDeTexto: {
    width: "90%",
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  logo: {
    width: 140,
    height: 160,
  },
});

export default Login;
