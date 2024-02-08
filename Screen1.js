import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as React from 'react';
import Header from './Header';
import { LinearGradient } from 'expo-linear-gradient';
import { IconButton, MD3Colors } from 'react-native-paper';
import { Card } from 'react-native-paper';

import { useAtom } from 'jotai';

import { emailAtom } from './Login';


const Screen1 = ({ navigation }) => {
  const [qualquerCoisa, setQualquerCoisa] = useAtom(emailAtom);

  return (
    <>
      <View style={estilos.container}>
        
       
        <Text>{qualquerCoisa[0]}</Text>
        <Text>{qualquerCoisa[1]}</Text>
        <View style={estilos.containerCards}>
          <Card style={estilos.card}>
          
            <Card.Cover
              style={estilos.img}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/pt/9/94/Superhero_P%C3%B4ster.jpg',
              }}
            />
          </Card>

          
        </View>
<Text style={estilos.titulo}>Super-Herói: O Filme</Text> 
        <Text style={estilos.descricao}>
          Rick Riker é um estudante comum do colegial. Porém, ao ser mordido por uma libélula geneticamente modificada ganha superpoderes. Agora sua missão é proteger a cidade das mãos do malvado Hourglass, que suga a vida de suas vítimas.
        </Text>

        <Text style={estilos.diretores}>
          Diretores: Aaron Horvath e Michael Jelenic
        </Text>

         <IconButton
            icon="play-circle"
            containerColor="rgb(120, 69, 172)"
            iconColor="white"
            size={20}
            onPress={() => console.log('Pressed') }
          />        
           <View style={estilos.botoes}>
          <IconButton
            icon="star"
            containerColor="rgb(120, 69, 172)"
            iconColor="yellow"
            size={20}
            onPress={() => console.log('Pressed')}
          />
          </View>
          <IconButton
          icon="logout"
          containerColor="rgb(120, 69, 172)"
          iconColor="white"
          size={20}
          onPress={() => {setQualquerCoisa(['', '']);
            navigation.navigate('Login');
          }}
          />
          



        <View style={estilos.containerCards}></View>
      </View>
    </>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(to top, green, purple)',
  },
  botoes: {
    flexDirection: 'row',
  },
  botao: {
    justifyContent: 'right',
    alignItems: '',
  },
  like: {
    margin: 5,
    padding: 5,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#D48DF1',
  },
  descricao: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 13,
    marginBottom:13,
    margin: 5,
    color: '#D48DF1',
  },
  diretores: {
    fontSize: 13,
    marginBottom: 20,
    color: '#FFFFFF',
  },
  img: {
    flex: 1,
  },
  card: {
    height: 250,
    width: 150,
  },
  containerCards: {
    flexDirection: 'row',
  },
});

export default Screen1;
