import React, {Component} from 'react'
import {StyleSheet, Text, View, FlatList, Image, SafeAreaView, Button} from 'react-native'

export default class classe extends Component{

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

const styles = StyleSheet.create({
  container:{
     marginTop: 10,
     marginLeft: 10,
     marginBottom: 10,
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
   }
})