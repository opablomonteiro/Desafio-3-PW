import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import home from './src/home'
import raca from './src/raca'
import classes from './src/classes'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Perfect World">
        <Drawer.Screen name="Perfect World" component={home} />
        <Drawer.Screen name="Raças" component={raca} />
        <Drawer.Screen name="Classes" component={classes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}




// import React, {Component} from 'react'
// import {StyleSheet, Text, View} from 'react-native'
// import home from './src/home'
// import raca from './src/raca'
// import {createDrawerNavigation} from 'react-navigation-drawer'
// import {createAppContainer} from 'react-navigation'
// export default class App extends Component {

// render(){
//   const AppNavigator = createAppContainer(AppDrawerNavigation)
//   return(
//     <AppNavigator/>
//   );
// }

// }

// const AppDrawerNavigation = createDrawerNavigation({
//   Home: home,
//   Raca: raca
// })

// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });