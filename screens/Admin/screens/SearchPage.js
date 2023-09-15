import { View, Text } from 'react-native'
import React from 'react'
import Search from '../components/Search'
import { Button, Appbar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';


export default function SearchPage() {
    const navigation = useNavigation();
    return (
        <View className='flex-1 justify-start '>

            <Appbar.Header>
                <Appbar.BackAction onPress={() =>navigation.goBack() } />
                <View style={{ width: '80%' }}>
                    <Search />
                </View>

            </Appbar.Header>
        </View>
    )
}