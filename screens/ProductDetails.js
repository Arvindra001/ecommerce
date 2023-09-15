import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image, ScrollView, Pressable, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Icon, Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../components/CartContex';
import { themeColors } from '../theme';
import Cardscroll from '../components/Cardscroll';

const array=[1,2,3,4,5,6,7,8,9,10];

function ProductDetails(props) {

   
    let product = props.route.params;
    const navigation = useNavigation();
    const [rang, setrang] = useState('');
    const [size, setsize] = useState('');
    const { dispatch, datauser, cartItems } = useCart();

    const addToCart = () => {
        const itemWithSizeAndRang = {
            ...product,
            selectedSize: size,
            selectedRang: rang,
        };
        dispatch({ type: 'ADD_TO_CART', item: itemWithSizeAndRang });
    };

    const removeFromCart = (id) => {

        dispatch({ type: 'REMOVE_FROM_CART', id });

    };


    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: '#ebe8e8' }}>
            <StatusBar style='light' />

            <View style={{ marginTop: 32,flexDirection: 'column', paddingBottom:40 }}>
                <View className='pl-4 pr-4' style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
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
                    {/* <Image
                        style={{ width: 42, height: 42, borderRadius: 20 }}
                        source={{ uri: datauser.profileImage }}
                    /> */}
                </View>
                <ScrollView showsVerticalScrollIndicator={false} className='mt-2'>
                    <View className='p-4' style={{ width: '100%' }}>
                        <Card
                            containerStyle={{ borderRadius: 20, height: 424, marginLeft: 0, marginRight: 0, padding: 0 }}

                        >

                            <Image
                                style={{ width: "100%", height: '100%', borderRadius: 20 }}
                                resizeMode="contain"
                                source={{ uri: product.img }}
                            />
                            {/* <Text>Pranshu Chittora</Text> */}
                             
                        </Card>

                    </View>

                    <View className='pl-5 pr-5' style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }} className="mt-2">{product.name}</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }} className="mt-2">$ {product.price}</Text>
                    </View>
                    <View className="mt-2 pr-4 pl-4">
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Size</Text>
                        <View className="justify-start flex-row mt-2">
                            <Pressable
                                className="h-5 w-5 bg-white rounded-full"
                                onPress={() => setsize('S')}
                                style={{
                                    alignItems: 'center', justifyContent: 'center',
                                    borderColor: size === 'S' ? '#ebe8e8' : 'transparent',
                                    borderWidth: size === 'S' ? 2 : 0,
                                }}
                            >
                                <Text style={{ fontSize: 15 }}>S</Text>
                            </Pressable>
                            <Pressable
                                className="ml-3 h-5 w-5 bg-white rounded-full"
                                onPress={() => setsize('M')}
                                style={{
                                    alignItems: 'center', justifyContent: 'center',
                                    borderColor: size === 'M' ? '#ebe8e8' : 'transparent',
                                    borderWidth: size === 'M' ? 2 : 0,
                                }}
                            >
                                <Text style={{ fontSize: 15 }}>M</Text>
                            </Pressable>
                            <Pressable
                                className="ml-3 h-5 w-5 bg-white rounded-full"
                                onPress={() => setsize('L')}
                                style={{
                                    alignItems: 'center', justifyContent: 'center', borderColor: size === 'L' ? '#ebe8e8' : 'transparent',
                                    borderWidth: size === 'L' ? 2 : 0,
                                }}
                            >
                                <Text style={{ fontSize: 15 }}>L</Text>
                            </Pressable>
                            <Pressable
                                className="ml-3 h-5 w-5 bg-white rounded-full"
                                onPress={() => setsize('XL')}
                                style={{
                                    alignItems: 'center', justifyContent: 'center',
                                    borderColor: size === 'XL' ? '#ebe8e8' : 'transparent',
                                    borderWidth: size === 'XL' ? 2 : 0,
                                }}
                            >
                                <Text style={{ fontSize: 15 }}>XL</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View className="mt-2 mb-4 pr-4 pl-4">
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Colour</Text>
                        <View className="justify-start flex-row mt-1">
                            <Pressable
                                onPress={() => setrang('red')}
                                style={{
                                    backgroundColor: 'red',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderColor: rang === 'red' ? 'white' : 'transparent',
                                    borderWidth: rang === 'red' ? 2 : 0,
                                }}
                                className="p-2 h-5 w-5 rounded-full"
                            ></Pressable>
                            <Pressable
                                onPress={() => setrang('green')}
                                style={{
                                    backgroundColor: 'green',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderColor: rang === 'green' ? 'white' : 'transparent',
                                    borderWidth: rang === 'green' ? 2 : 0,
                                }}
                                className="p-2 ml-3 h-5 w-5 rounded-full"
                            ></Pressable>
                            <Pressable
                                onPress={() => setrang('blue')}
                                style={{
                                    backgroundColor: 'blue',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderColor: rang === 'blue' ? 'white' : 'transparent',
                                    borderWidth: rang === 'blue' ? 2 : 0,
                                }}
                                className="p-2 ml-3 h-5 w-5 rounded-full"
                            ></Pressable>
                            <Pressable
                                onPress={() => setrang('purple')}
                                style={{
                                    backgroundColor: 'purple',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderColor: rang === 'purple' ? 'white' : 'transparent',
                                    borderWidth: rang === 'purple' ? 2 : 0,
                                }}
                                className="p-2 ml-3 h-5 w-5 rounded-full"
                            ></Pressable>
                        </View>
                    </View>


                    <View className='pl-4 pr-4' >
                    <View className="flex-row justify-between  mb-4 mt-4 ">
                        {cartItems.some((item) => item.id === product.id) ? (
                            <TouchableOpacity onPress={()=>removeFromCart(product.id)} style={styles.checkoutButtonn}>
                                <Text style={styles.checkoutButtonText}>REMOVE FROM CART</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={addToCart} style={styles.checkoutButtona}>
                                <Text style={styles.checkoutButtonText}>ADD TO CART</Text>
                            </TouchableOpacity>
                        )}

                        <TouchableOpacity  style={styles.checkoutButton1}>
                                <Text style={styles.checkoutButtonText}>BUY NOW</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <Text className='pl-4' style={{fontSize:20}}>Similar Products</Text>
                    <ScrollView horizontal>
                    {array.map((index)=>{
                        return(<Cardscroll key={index} />)
                    })}
                   </ScrollView>
                </ScrollView>

            </View>


        </View>
    )
}

export default ProductDetails
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#ebe8e8',
        marginTop: 32,
        marginLeft: 16,
        marginRight: 16,
    },
    totalPriceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8
    },
    totalPriceText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#838793'
    },
    checkoutButton: {
        padding: 12,
        backgroundColor: themeColors.text,
        borderRadius: 20,
        width: '49%',
        height: 43,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkoutButtona:{
        padding: 12,
        backgroundColor: themeColors.text,
        borderRadius: 20,
        width: '49%',
        height: 43,
        justifyContent: 'center',
        alignItems: 'center',

    },
    checkoutButton1: {
        padding: 12,
        backgroundColor: 'rgb(180, 0, 251)',
        borderRadius: 20,
        width: '49%',
        height: 43,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkoutButtonn: {
        padding: 12,
        backgroundColor: 'red',
        borderRadius: 20,
        width: '49%',
        height: 43,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkoutButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    emptyCartContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 180,
    },
});
