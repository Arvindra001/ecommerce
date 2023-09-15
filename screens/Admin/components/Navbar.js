import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon, Avatar, Badge } from 'react-native-elements'
import { useCart } from '../../../components/CartContex'
import { Menu, Pressable } from "native-base";
import { useNavigation } from '@react-navigation/native';

const Navbar = ({ out, openDrawer }) => {

    const navigation = useNavigation();

    const handle = () => {
        out();
    }
    const { datauser } = useCart();
    return (
        <View className="flex-row justify-between items-center pt-10 pl-3 pr-3 pb-3 bg-white" >
            <View className='flex-row justify-between items-center'>

                {/* Menu Drawer */}
                <Icon onPress={() => navigation.toggleDrawer()} name='menu' />


            </View>
            <View className='flex-row justify-around items-center' style={{ width: '50%' }}>
                <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
                <Icon size={25} type='material' name='search' />
                </TouchableOpacity>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <Icon size={20} type='font-awesome' name='bell' />
                        <Badge
                            status="success"
                            value={2}
                            containerStyle={{ position: 'absolute', top: -6, left: 10 }}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Message')}>
                        <Icon size={20} name='message' />
                        <Badge
                            status="success"
                            value={2}
                            containerStyle={{ position: 'absolute', top: -6, left: 10 }}
                        />
                    </TouchableOpacity>
                </View>
                {/* Menu Avatar */}
                <Menu w="100" marginRight={10} trigger={triggerProps => {
      return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
             <Avatar title='A' source={require('../../../assets/images/p1.jpg')}  rounded size={30} />
            </Pressable>;
    }}>
        <Menu.Item>Arial</Menu.Item>
        <Menu.Item>New</Menu.Item>
        <Menu.Item onPress={()=>handle()}>Log Out</Menu.Item>
       
      </Menu>
              
            </View>
        </View>
    )
}
export default Navbar