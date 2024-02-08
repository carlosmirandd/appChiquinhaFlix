import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as React from 'react';

import { atom, useAtom } from 'jotai';
export const emailAtom = atom(['', '']);



const Login = ({ navigation }) => {
  const [pwToggle, setpwToggle] = React.useState(true);
  const [email, setEmail] = useAtom(emailAtom);

  return (
    <View style={estilos.container}>
      <Image source={require('./logo2.png')} style={estilos.logo} />
      <Text style={estilos.titulo}>Faça Login</Text>
      
      
      
      <TextInput
        mode="outlined"
        label="Nome de Usuário"
        right={<TextInput.Icon icon="" />}
        onChange={(callback) => setEmail([callback.target.value, email[1]])}
        value={email[0]}
        style={estilos.caixaDeTexto}
      />

      <Text>{email}</Text>
      <TextInput
        mode="outlined"
        label="Senha"
        secureTextEntry={pwToggle}
        right={
          <TextInput.Icon icon="eye" onPress={() => setpwToggle(!pwToggle)} />
        }
        onChange={(callback) => setEmail([email[0], callback.target.value])}
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
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(to top, #000000, purple)',
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

