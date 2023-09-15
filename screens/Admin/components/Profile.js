import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React,{useState} from 'react'
import Navbar from './Navbar'
import { Avatar, Badge } from 'native-base'
import { themeColors } from '../../../theme'
import { Checkbox } from 'native-base'
import { Icon } from 'react-native-elements'

export default function Profile({ out }) {
  const [email, setemail] = useState('kumararvindra7691@gmail.com');
  const [number, setNumber] = useState('+917651853228');
  return (
    <View>
 <SafeAreaView style={{width:'100%'}}>
        <Navbar out={out} />
      <Text className='mt-5 ml-4' style={{ fontSize: 40 }}>Profile</Text>
    </SafeAreaView>
      <View className='items-center p-4'>
   
        <View className='flex-column mb-3' style={{ width: '100%', backgroundColor: 'white', padding: 20, borderRadius: 20 }}>

          <View className='flex-column justify-center items-center'>
            <Avatar borderWidth="1" shadow={5} borderColor={themeColors.text} mb={6} bg="purple.600" alignSelf="center" size="2xl" source={require('../../../assets/images/p1.jpg')}>

              <Avatar.Badge bg="trueGray.100">
                <Icon name="camera" type="antdesign" color={themeColors.text} />
              </Avatar.Badge>
            </Avatar>

         {/* 
            <TouchableOpacity className='p-3 items-center mt-2' style={{ backgroundColor: 'rgba(255, 54, 71, 0.1)', width: 100, borderRadius: 20 }}>
              <Text>Vijay Singh</Text>
            </TouchableOpacity> */}

          </View>

        </View>
        <View className='flex-column mb-3' style={{ width: '100%', backgroundColor: 'white', padding: 20, borderRadius: 20 }}>

          <TextInput className='p-2 mt-3 rounded-2xl' value={email}  onChange={(value)=>setemail(value)} style={{ backgroundColor: 'rgba(255, 99, 71, 0.1)' }} placeholder='Email' />
          <TextInput className='p-2 mt-3 rounded-2xl' value={number} onChange={(value)=>setNumber(value)} style={{ backgroundColor: 'rgba(255, 99, 71, 0.1)' }} placeholder='Number' />
          <TouchableOpacity className='p-2 mt-3  rounded-2xl items-center' style={{ borderColor: 'red', borderWidth: 0.9, width: 100 }}>
            <Text>SAVE CHANGES</Text>
          </TouchableOpacity>

        </View>
        <View className='flex-column mb-3' style={{ width: '100%', backgroundColor: 'white', padding: 20, borderRadius: 20 }}>
          {/* <Text className='mb-3' style={{fontSize:20}}>DEACTIVATE ACCOUNT</Text> */}
          <Checkbox value="test" accessibilityLabel="This is a dummy checkbox">
            I confirm my account deactivation
          </Checkbox>
          <TouchableOpacity className='p-2 mt-3  rounded-2xl items-center' style={{ borderColor: 'red', borderWidth: 0.9, width: 'auto', maxWidth: 140 }}>
            <Text>DEACTIVATE ACCOUNT</Text>
          </TouchableOpacity>

        </View>

      </View>
    </View>
  )
}