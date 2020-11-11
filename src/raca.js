import React, {PureComponent} from 'react'
import {StyleSheet, Text, View, FlatList, Image, SafeAreaView, TouchableOpacity} from 'react-native'


export default class raca extends PureComponent{

    render(){
        let {container, cardText, card, cardImage} = styles
        return(
            <SafeAreaView>
                <View style={container}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({item}) =>  (
                            
                            <TouchableOpacity style={card}>
                            <Image source = {{uri: item.pictureRaca.large}} style={cardImage}/>
                            
                            <Text style={cardText}>{item.raca}</Text>
                            <Text style={cardText}>{item.descricaoRaca}</Text>

                            </TouchableOpacity>


                        )}
                        keyExtractor={item => item.raca}

                    />     
                </View>
            </SafeAreaView>

            
                
            
        )
    }

    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }
    
    carregar = () =>{
        try{
            fetch("http://demo1340780.mockable.io/pwRaca")
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

}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        marginBottom: 100
    },
    cardText:{
        fontSize: 16,
        padding: 10
    },
    card:{
        backgroundColor: '#fff',
        marginBottom: 10,
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




// import React, {Component} from 'react'
// import {StyleSheet, Text, View, FlatList, Image, SafeAreaView} from 'react-native'

// export default class raca extends Component{

//   constructor(props){
//     super(props)
//     this.state = {
//       data: []
//     }
//   }

//   carregar = () =>{
//     try{
//       fetch("http://demo1340780.mockable.io/pw")
//       .then(res => res.json())
//       .then(res => {
//         this.setState({
//           data: res.results
//         })
//       })
//     }catch (error) {
//       console.error(error)
//     }
//   }

//   componentDidMount(){
//     this.carregar();
//   }

  
//   render(){
    
//     return(
//       <SafeAreaView>
//       <View style={styles.container}>
//         <FlatList
//           data={this.state.data}
//           renderItem={({item}) =>  (
//             <View style={styles.line}>
//                 <Image source = {{uri: item.pictureClass.large}} style={styles.avatar}/>

//                 <View style={styles.info}>
//                   <Text style={styles.classe}>{item.classe}</Text>
//                 </View>
                
//             </View>
//           )}
//           keyExtractor={item => item.classe}

//         />     
//       </View>
//       </SafeAreaView>
      
//     )
//   }

// }



// const styles = StyleSheet.create({
//   container:{
//     marginTop: 10,
//     marginLeft: 10,
//     backgroundColor: "#FFF",
//     borderTopWidth: 0,
//     borderBottomWidth: 0
//   },
//   avatar:{
//     width: 80,
//     height: 80,
//     borderRadius: 50,
//     marginRight: 10,
//     alignSelf: "center"
//   },
//   line: {
//     height: 90,
//     flexDirection: "row",
//     borderBottomColor: "#ccc",
//     borderBottomWidth: 1
//   },
//   info: {
//     flexDirection: "column",
//     justifyContent: "flex-start"
//   },
//   classe: {
//     fontSize: 14,
//     fontWeight: "bold"
//   }
// })