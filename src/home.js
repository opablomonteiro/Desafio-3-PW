import React, {Component} from 'react'
import {StyleSheet, Text, View, Image, Button} from 'react-native';

export default class home extends Component {

render(){
  return(
    <View>
      <Image style={styles.logo} source = {{uri: 'https://perfectworld.uol.com.br/img/personagens/characters.png'}}/>
      <Text style={styles.titulo}>Conheca as Raças e Classes do Perfect World</Text>
      
    </View>
  );
}

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    width: "80%",
    height: 400,
    marginRight: 15,
    marginLeft: 15,
    alignSelf: "center"
  },
  titulo:{
      fontSize: 14,
      fontWeight: 'bold',
      alignSelf: "center"
  }
});