import React, { useState } from 'react'
import { Text, View, TouchableWithoutFeedback, Dimensions, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { useCart } from './CartContex';
import { Badge } from 'react-native-elements';

function Card1({ items }) {
  const { disfav, favItem } = useCart();
  const navigation = useNavigation();
  //Add Favorite
  const addFav = () => {
    const itemWithSizeAndRang = {
      ...items
    };
    disfav({ type: 'add_to_favorite', item: itemWithSizeAndRang });
  };

  const removeFromCart = (id) => {
    disfav({ type: 'remove_from_favorite', id });
  };

  return (
    <View className="relative mt-6 mb-1">
      <Badge
            status="success"
            containerStyle={{ position: 'absolute', top: 10, left: 1,zIndex:1 ,width:40}}
            value="New"
            
          />
        
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Product", { ...items })}>
        <Image
          source={{ uri: items.img }}
          style={{
            width: 156,
            height: 200,

          }}
          className="rounded-2xl"
        />
      </TouchableWithoutFeedback>
      
      {favItem.some(item => item.id === items.id) ? (
        <TouchableOpacity
          onPress={() => removeFromCart(items.id)}
          className="absolute p-2 rounded-full mt-2"
          style={{ backgroundColor: 'rgba(255,255,255,0.3)', marginLeft: 115 }}
        >
          <Icon type='font-awesome' size={15} name='heart' color='red' />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={addFav}
          className="absolute p-2 rounded-full mt-2"
          style={{ backgroundColor: 'rgba(255,255,255,0.3)', marginLeft: 115 }}
        >
          <Icon type='font-awesome' size={15} name='heart' color='black' />
        </TouchableOpacity>
      )}


      <View className="absolute ml-2 " style={{ marginTop: 145 }}>
        <View className="flex-column justify-center items-center" style={{ backgroundColor: '#D9D9D999', width: 138, height: 48, borderRadius: 20 }}>
          <Text style={{ fontSize: 15, fontWeight: 700 }}>{items.name}</Text>
          <Text>${items.price}</Text>
        </View>
      </View>
    </View>

  )
}

export default Card1