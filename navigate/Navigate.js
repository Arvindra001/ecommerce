import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Icon, Badge } from 'react-native-elements';
import Homescreen from '../screens/Homescreen';
import ProductDetails from '../screens/ProductDetails';
import Cart from '../screens/Cart';
import CategoryScreen from '../screens/CategoryScreen';
import AccountScreen from '../screens/AccountScreen';
import { useCart } from '../components/CartContex';
import ProfileScreen from '../screens/myaccount/Profile';
import Payment from '../screens/myaccount/Payment';
import Address from '../screens/myaccount/Address';
import Order from '../screens/myaccount/Order';
import Notification from '../screens/Notification';
import Home from '../screens/Admin/screens/Home';
import SearchPage from '../screens/SearchPage';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppStack({ Login }) {


  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" >
        {props => <Homescreen {...props} Login={Login} />}
      </Stack.Screen>
      <Stack.Screen name="Product" component={ProductDetails} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="Search" component={SearchPage} />

    </Stack.Navigator>
  );
}


function AccountNavigator({ onOut, handleAdmin, Login, out }) {

  return (
    <Stack.Navigator initialRouteName='Account'>
      <Stack.Screen options={{ headerShown: false }} name='Account'>
        {props => <AccountScreen {...props} Login={Login} onOut={onOut} handleAdmin={handleAdmin} out={out} />}
      </Stack.Screen>
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );

}

function MyTabs({ Login, handleAdmin, handleAdminBack, out }) {
  const { cartItems } = useCart();


  return (
    <Tab.Navigator initialRouteName="HomeScreen" screenOptions={{
      tabBarStyle: { height: 70 }
    }} >
      <Tab.Screen
        name="Home"
        options={{

          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Icon
              color={color}
              name="home"
              size={20}
              solid
              type="material"
            />
          ),
        }}
      >
        {props => <AppStack {...props} Login={Login} />}
      </Tab.Screen>
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{

          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Icon
              color={color}
              name="heart"
              size={20}
              solid
              type="font-awesome"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{

          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Icon
              color={color}
              name="bell"
              size={20}
              solid
              type="font-awesome"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{

          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (<>
            <Icon
              name="shopping-cart"
              type="font-awesome"
              color={color}
              size={20}
            />
            <Badge
              status="success"
              value={cartItems.length}
              containerStyle={{ position: 'absolute', top: 18, left: 40 }}
            /></>
          ),
        }}
      />
      <Tab.Screen
        name="AccountSetting"
        options={{

          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Icon
              color={color}
              name="user"
              size={20}
              solid
              type="feather"
            />
          ),
        }}
      >
        {props => <AccountNavigator  {...props} Login={Login} onOut={handleAdminBack} handleAdmin={handleAdmin} out={out} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default MyTabs;
