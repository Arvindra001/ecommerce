import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'native-base'
import { useNavigation } from '@react-navigation/native'




export default function NavigationView({out}) {
    const navigation=useNavigation();
  return (
    <View className='flex-1 justify-start '>
        <View className='flex-column justify-center items-center mt-20'>
        <TouchableOpacity onPress={()=>navigation.navigate('Dashboard')} className='p-3'><Text style={{fontSize:20}}>Dashboard</Text></TouchableOpacity>
        {/* <Divider my="2" _light={{
        bg: "muted.300"
      }} _dark={{
        bg: "muted.50"
      }} /> */}
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')} className='p-3'><Text style={{fontSize:20}}>Profile</Text></TouchableOpacity>
        {/* <Divider my="2" _light={{
        bg: "muted.300"
      }} _dark={{
        bg: "muted.50"
      }} /> */}
        <TouchableOpacity onPress={()=>navigation.navigate('Product')} className='p-3'><Text style={{fontSize:20}}>Product list</Text></TouchableOpacity>
        {/* <Divider my="2" _light={{
        bg: "muted.300"
      }} _dark={{
        bg: "muted.50"
      }} /> */}
        <TouchableOpacity onPress={()=>console.log('orders')} className='p-3'><Text style={{fontSize:20}}>Orders</Text></TouchableOpacity>
        {/* <Divider my="2" _light={{
        bg: "muted.300"
      }} _dark={{
        bg: "muted.50"
      }} /> */}
        <TouchableOpacity onPress={()=>console.log('Setting')} className='p-3'><Text style={{fontSize:20}}>Setting</Text></TouchableOpacity>
        <Divider my="2" _light={{
        bg: "muted.300"
      }} _dark={{
        bg: "muted.50"
      }} />
        <TouchableOpacity onPress={()=>out()} className='p-3'><Text style={{fontSize:20}}>Log Out</Text></TouchableOpacity>
        {/* <Divider my="2" _light={{
        bg: "muted.300"
      }} _dark={{
        bg: "muted.50"
      }} /> */}
        </View>
      
    </View>
  )
}