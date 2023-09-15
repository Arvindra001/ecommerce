import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './navigate/Navigate';
import Auth from './navigate/Auth';
import { CartProvider } from './components/CartContex';
import { NativeBaseProvider } from 'native-base';
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from './screens/Admin/screens/Home';
import Profile from './screens/Admin/components/Profile';
import Products from './screens/Admin/screens/Products';
import Notification from './screens/Admin/screens/Notification';
import Message from './screens/Admin/screens/Message';
import LoginScreen from './screens/Admin/screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import SearchPage from './screens/Admin/screens/SearchPage';
import Order from './screens/Admin/screens/Order';



const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />



    </DrawerContentScrollView>
  );
}

function AdminNav({ handleLogOut, handleAdminBack }) {
  const [logina, setLogina] = useState(false)
  const handlelogin = () => {
    setLogina(true);
  }

  const handlelogOut = () => {
    setLogina(false);
  }

  return (<>
    {
      logina ? (<Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <CustomDrawerContent  {...props} />}
      >
        <Drawer.Screen options={{ headerLeftLabelVisible: false }} name='Dashboard'>
          {props => <Home {...props} out={handlelogOut} />}
        </Drawer.Screen>
        <Drawer.Screen name='Profile' >
          {props => <Profile {...props} out={handlelogOut} />}
        </Drawer.Screen>
        <Drawer.Screen name='Product' >
          {props => <Products {...props} out={handlelogOut} />}
        </Drawer.Screen>
        <Drawer.Screen name="Order" options={{ headerShown: false }} component={Order} />
        <Drawer.Screen name="Notification" options={{ headerShown: false }} component={Notification} />
        <Drawer.Screen name="Message" options={{ headerShown: false }} component={Message} />
        <Drawer.Screen name="Search" options={{ headerShown: false }} component={SearchPage} />
     
      </Drawer.Navigator>
      ) : (<Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" >
          {props => <LoginScreen {...props} handleAdminBack={handleAdminBack} login={handlelogin} />}
        </Stack.Screen>
      </Stack.Navigator>)}
  </>
  )

};


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(true)

  const [main, setMain] = useState(true);///It is for login


  const handleMain = () => {
    setMain(false);
  }
  const handleMainBack = () => {
    setMain(true);
  }

  // Splash Screen
  const handleLogin = () => {
    // Perform your login logic here
    // If login is successful, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic here
    // Set isLoggedIn to false
    setIsLoggedIn(false);
  };

  const handleAdmin = () => {
    setAdmin(false);
  }

  const handleAdminBack = () => {
    setAdmin(true);
  }

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* Conditionally render Auth or MyTabs based on the login state */}
        <CartProvider>
          {isLoggedIn ? (
            admin ? (
              main ? (<MyTabs handleAdminBack={handleAdminBack} Login={handleMain} out={handleMainBack} handleAdmin={handleAdmin} />) : (<Auth onLogin={handleMainBack} />)
            ) : (<AdminNav handleAdminBack={handleAdminBack} />)
          ) : (
            <Splash handle={handleLogin} />
          )}</CartProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
