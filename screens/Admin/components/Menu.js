import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { Menu, Pressable } from 'native-base'
import { TouchableOpacity } from 'react-native'

export default function Menu1() {
  return (
     

     <Menu w="100" marginRight={10} trigger={triggerProps => {
        return <TouchableOpacity accessibilityLabel="More options menu" {...triggerProps}>
              <Icon size={20} name='menu'/>
              </TouchableOpacity>;
      }}>
          <Menu.Item>Today</Menu.Item>
          <Menu.Item>Month</Menu.Item>
          <Menu.Item>Year</Menu.Item>
        </Menu>
  )
}