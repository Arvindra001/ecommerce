import { View, Text, Dimensions,Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';
import { product } from '../data';
export default function ImageSlider() {
    const width = Dimensions.get('window').width;
  return (
    <View className='mt-4'>
     <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={product}
                scrollAnimationDuration={1500} 
                renderItem={({item,index }) => (
                
                        <Image style={{width:width,height:width/2.2}} source={item.image} />
                   
        
                )}
            />
    </View>
  )
}