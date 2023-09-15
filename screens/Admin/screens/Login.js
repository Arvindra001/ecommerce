import { View, Text, TouchableOpacity, Image, TextInput, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../../../theme'
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import ANimationLogin from '../components/LoginAnimation';


export default function LoginScreen({handle, login, handleAdminBack}) {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit =  ()=>{
      if(email && password){
        login(); 
      }
  }
  return (
    <View className="flex-1 bg-white justify-between items-center" style={{backgroundColor: themeColors.admin}}>
    <StatusBar style='light'/>
    <Text className='text-gray-300' style={{fontSize:100,marginTop:100}}>Admin</Text>
    {/* <View className='flex-1 justify-center items-center'>
    <LottieView
      source={require('./animation.json')}
        autoPlay
        loop
      /></View> */}
      {/* <ANimationLogin/> */}
      <View 
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50,width:'100%',height:'50%'}} 
        className="bg-white px-8 pt-8  ">
          <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">Email Address</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              placeholder="email"
              value={email}
              onChangeText={value=> setEmail(value)}
            />
            <Text className="text-gray-700 ml-4">Password</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              secureTextEntry
              placeholder="password"
              value={password}
              onChangeText={value=> setPassword(value)}
            />
            <TouchableOpacity className="flex items-end">
              <Text className="text-gray-700 mb-5">Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={handleSubmit}
              className="py-3 bg-yellow-400 rounded-xl">
                <Text 
                    className="text-xl font-bold text-center text-gray-700"
                >
                        Login
                </Text>
             </TouchableOpacity>
             <View className="items-center mt-8">
        <TouchableOpacity onPress={() => handleAdminBack()}>
            <Text className="font-semibold  text-yellow-500" style={{fontSize:15}}> Back</Text>
          </TouchableOpacity></View>
          </View>
         
          
      </View>
    </View>
    
  )
}