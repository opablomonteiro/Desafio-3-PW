import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import home from './src/home'
import raca from './src/raca'
import classes from './src/classes'


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


