import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useAtom } from 'jotai';
import { emailAtom } from './Login';

const Screen0 = ({ navigation }) => {
  const [qualquerCoisa, setQualquerCoisa] = useAtom(emailAtom);

  return (
    <LinearGradient 
      colors={['#3E01A2', 'purple']} 
      start={{ x: 0, y: 1 }} 
      end={{ x: 0, y: 0 }} 
      style={estilos.container}
    >
      <Text style={estilos.titulo}>Seja Bem-Vindo,</Text>
      <Text style={{color: 'white'}}>{qualquerCoisa[0]}</Text>
      
      <Button
        style={estilos.botao}
        icon="logout"
        mode="contained"
        onPress={() => {
          setQualquerCoisa(['', '']);
          navigation.navigate('Login');
        }}>
        Voltar
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
    margin: 30,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white'
  },
});

export default Screen0;
