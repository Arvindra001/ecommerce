import * as React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

 function SearchBarCar() {
  const width = Dimensions.get('window').width; // Use height instead of width for vertical orientation
 const array=[
    "New Sport shoes",
    "T-shirt for men",
    " Sport shoes",
    "Jeans Pants",
 ]
  return (
    <View className='absolute ' style={{marginTop:70,marginLeft:90}}>
      <Carousel
      width={width/2}
      height={20}
        loop// Use height as the Carousel's height
        vertical={true} // Set the Carousel to be vertical
        autoPlay={true}
        autoplayInterval={3000} // Set the autoplay interval in milliseconds (e.g., 3 seconds)
        data={array}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({item, index }) => (
            <Text style={{ fontSize: 15,opacity:0.5 }}>'{item}'</Text>
        )}
      />
    </View>
  );
}

export default SearchBarCar;
