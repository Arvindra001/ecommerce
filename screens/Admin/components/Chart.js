import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get("window").width;

export default function Chart() {

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          },
          {
            data: [10, 30, 35, 70, 90, 60],
            color: (opacity = 1) => `rgba(255, 99, 71,${opacity})`, // optional
            strokeWidth: 2 // optional
          },
          {
            data: [25, 28, 50, 86, 95, 112],
            color: (opacity = 1) => `rgba(56, 0, 70, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["Revenue","Sells","orders"] // optional
      };

      const chartConfig = {
        backgroundGradientFrom: "white",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "white",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
  return (
    <LineChart
    style={{borderRadius:20,marginBottom:30}}
  data={data}
  width={screenWidth*0.89}
  height={300}
  verticalLabelRotation={30}
  chartConfig={chartConfig}
  bezier
/>
  )
}