import {Component} from 'react'
import {StyleSheet, Text, View, FlatList, Image, SafeAreaView, Button, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

 class classe extends Component{

  constructor(props){
    super(props)
    this.state = {
        data: []
    }
  }

  carregar = () =>{
    try{
      fetch("http://demo1340780.mockable.io/pwClasse")
      .then(res => res.json())
      .then(res => {
        this.setState({
         data: res.results
        })
    })
    }catch (error) {
      console.error(error)
    }
  }
  
 

  componentDidMount(){
    this.carregar();
  }

  

  render(){
    
    return(
        <SafeAreaView>
        <Text>OBS.: O Stack Navigator bloqueou a rolagem do FlatList na Web mas no Android funciona normalmente. NÃO ENTENDI !!!</Text>
        <View style={styles.container}>
       
         <FlatList
           data={this.state.data}
           renderItem={({item}) =>  (
             <View style={styles.line}>
                 <Image source = {{uri: item.pictureClass.large}} style={styles.avatar}/>

                 <View style={styles.info}>
                   <Text style={styles.classe}>{item.classe}</Text>
                   <Text style={styles.info}>Raça: {item.raca}</Text>
                   <Text style={styles.info}>Tipo de Ataque: {item.tipoDeAtaque}</Text>
                   <Text style={styles.info}>Sexo: {item.sexo}</Text>
                   <Text style={styles.info}>Vantagens: {item.vantagens}</Text>
                   <Text style={styles.info}>Desvantagens: {item.desvantagens}</Text>
                   <Text>&nbsp;</Text>
                     <Button
                      title="Imagem e Descrição"
                      onPress={() =>
                        {this.props.navigation.navigate('Imagem e Descrição'), escolhaClasse = item.classe, escolhaDescricao = item.descricaoClasse, escolhaImagem = item.pictureClass.large}
                      }
                    /> 
                   <Text>&nbsp;</Text>
                 </View>
             </View>
           )}
           keyExtractor={item => item.classe}

         />     
       </View>
       </SafeAreaView>
      
     )
   }

}

var escolhaClasse;
var escolhaDescricao;
var escolhaImagem;

const Stack = createStackNavigator();

export default function tela() {
  return (
    
      <Stack.Navigator initialRouteName="Classes">
        <Stack.Screen name="Classes" component={classe} />
        <Stack.Screen name="Imagem e Descrição" component={detalheClasse} />
      </Stack.Navigator>
    
  );
}


function detalheClasse({route, navigation}) {
  
  var correr = [escolhaClasse]
   return (
    

    <SafeAreaView>
    <Text>OBS.: O Stack Navigator bloqueou a rolagem do FlatList na Web mas no Android funciona normalmente. NÃO ENTENDI !!!</Text>  
      <View style={styles.container2}>
      
        <FlatList
            
            data= {correr}
            renderItem={() =>  (
                
                <TouchableOpacity style={styles.card}>
                <Image source = {{uri: escolhaImagem}} style={styles.cardImage}/>
                <Text style={styles.cardText}>{escolhaClasse}</Text>
                <Text style={styles.cardText}>{escolhaDescricao}</Text>
                
                </TouchableOpacity>


            )}
            keyExtractor={data => data.escolhaClasse}

        />     
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
     marginTop: 10,
     marginLeft: 10,
     marginBottom: 110,
     marginRight: 10,
     backgroundColor: "#FFF",
     borderTopWidth: 0,
     borderBottomWidth: 0
   },
   avatar:{
     width: 80,
     height: 80,
     borderRadius: 50,
     marginRight: 10,
     alignSelf: "center"
   },
   line: {
     flexDirection: "row",
     borderBottomColor: "#ccc",
     borderBottomWidth: 3
   },
   info: {
     flexDirection: "column",
     justifyContent: "flex-start",
     width: 230    
   },
   classe: {
     fontSize: 18,
     fontWeight: "bold"
   },
   container2:{
    marginTop: 10,
    marginBottom: 110
  },
  cardText:{
    fontSize: 16,
    padding: 10
  },
  card:{
    backgroundColor: '#fff',
    marginBottom: 10,
    marginTop: 5,
    marginLeft: '2%',
    marginRight: '2%',
    width: '98%',
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset:{
        width: 3,
        height: 3
  }
},
cardImage:{
    height: 700

}
})