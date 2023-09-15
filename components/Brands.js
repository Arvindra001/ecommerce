import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'native-base'
import { brands } from '../data'
import { Image } from 'react-native'
import { Dimensions } from 'react-native'
import { themeColors } from '../theme'
import { Avatar } from 'react-native-elements';



export default function Brands() {
  const width = Dimensions.get('window').width;
  return (

    <View style={{ backgroundColor: '#ebe8e8' }}>
      <ScrollView horizontal >
        {brands.map((item) => {

          return (
            <View className='p-4' >
              <Image  style={{width:50,height:30,padding:4}} source={item.image} />
            </View>
          )
        })}

      </ScrollView>
    </View>
  )
}