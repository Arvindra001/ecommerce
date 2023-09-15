import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import Menu from './Menu'
import Menu1 from './Menu'

export default function Card() {
    return (
        <View className='flex-column justify mb-3' style={{width:'100%',height:150,backgroundColor:'white', padding:20,borderRadius:20}}>
        <View className="flex-row justify-between ">
        <View><Text style={{fontSize:20}}>Sales | <Text style={{fontSize:15}}>Today</Text></Text></View>
        
        <Menu1/>

        </View>
        <View className='flex-row justify-start items-center mt-5'>
        <View className='rounded-full p-3 ' style={{backgroundColor:'rgba(255, 99, 71, 0.1)'}}>
        <Icon name='shopping-cart' type='font-awesome' solid={false} size={40} />
        </View>
        <View className='flex-column justify-start ml-3'>
            <Text style={{fontSize:50}}>125</Text>
            <Text>18% increase</Text>
        </View>
        </View>
        </View>
    )
}