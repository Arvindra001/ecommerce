import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Navbar from '../components/Navbar'
import { themeColors } from '../../../theme'
import Card from '../components/Card'
import Chart from '../components/Chart'

const array=[1,2,3];

const Home=({out})=> {
  return (
    <View className='flex-1 items-center' style={{backgroundColor:themeColors.admin}}>
    <StatusBar style='light'/>
    <SafeAreaView style={{width:'100%'}}>
        <Navbar out={out} />
        <Text className='mt-5 ml-5' style={{fontSize:30}}>Dashboard</Text>
    </SafeAreaView>
   
    <ScrollView className='mt-2 p-5' style={{width:'100%'}}>
    {array.map((index)=>{
    return <Card key={index}/>
}
    )
    } 
    <Chart/>
    </ScrollView>
      
    </View>
  )
}

export default Home