import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as React from 'react';
import Header from './Header';

import { Card } from 'react-native-paper';

import { useAtom } from 'jotai';

import { emailAtom } from './Login';

const Screen1 = ({ navigation }) => {
  const [qualquerCoisa, setQualquerCoisa] = useAtom(emailAtom);

  return (
    <>
      <View style={estilos.container}>
        <Text style={estilos.titulo}>Seja Bem-Vindo,</Text>
        <Text>{qualquerCoisa[0]}</Text>
        <Text>{qualquerCoisa[1]}</Text>
        
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
      </View>
    </>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(to top, #3E01A2, purple)',
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
  img: {
    flex: 1,
  },
  card: {
    margin: 10,
    height: 70,
    width: 70,
  },
  containerCards: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Screen1;
