import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Card from './Card';
import Chart from './Chart';

const array=[1,2,3];

export default function Dashboard() {
  return (

    <ScrollView className='mt-2 p-5' style={{width:'100%'}}>
    {array.map((index)=>{
    return <Card key={index}/>
   })} 
    <Chart/>
</ScrollView>
  )
}