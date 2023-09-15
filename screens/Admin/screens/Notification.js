import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'


export default function Notification() {
  const navigation=useNavigation();
  return (
    <View className='flex-1 p-4'>
      <View className='mt-3'>
      <Icon
                        size={22}
                        onPress={() => navigation.goBack()}
                        containerStyle={{
                            width: 42,
                            height: 42,
                            borderRadius: 20,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        type='material'
                        name='chevron-left'
                    />
      </View>
       <View className='justify-center items-center'>
      <Text>Notification</Text></View>
    </View>
  )
}