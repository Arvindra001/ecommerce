import { View, Text } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper'

export default function Notification() {
  return (

      <Appbar.Header mode='center-aligned'>
         <Appbar.Content  title="Notification" />
      </Appbar.Header> 
    
  )
}