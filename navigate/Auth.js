import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from '../screens/Login';
import Signup from '../screens/Signup';
import WelcomeScreen from '../screens/WelcomeScreen';
import Splash from '../screens/Splash';
import Login from '../screens/Admin/screens/Login';
import { useState } from 'react';
import Home from '../screens/Admin/screens/Home';
import Profile from '../screens/Admin/components/Profile';
import Notification from '../screens/Admin/screens/Notification';
import Message from '../screens/Admin/screens/Message';
import Products from '../screens/Admin/screens/Products';
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();




function Auth({ onLogin }) {
  
  const handleLog = () => {
    onLogin();
  };
  return (
    <Stack.Navigator initialRouteName='Login'>
      {/* <Stack.Screen name="Splash" options={{ headerShown: false }} >
        {props => <Splash {...props} handle={handleLog} />}
      </Stack.Screen> */}
       <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Login">
            {props => <Loginscreen {...props}  onLog={handleLog} />}
          </Stack.Screen>
          <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} /> 
    </Stack.Navigator>
  )
}

export default Auth

