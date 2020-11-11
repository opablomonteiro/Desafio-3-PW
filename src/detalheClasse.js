import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import {toUpperFirst} from '../util'

const detalheClasse = props => {
    const {classes, onPressItem} = props
    
    return(
        <TouchableOpacity onPress={() => {
            onPressItemDetails(data)
        }} >
            <View>
                <Image source = {{uri: data.pictureRaca.large}} style={cardImage}/>
                <Text style={cardText}>{data.raca}</Text>
                <Text style={cardText}>{data.descricaoRaca}</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container:{
        marginTop: 10
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
        height: 300

    }
})

export default detalheClasse



