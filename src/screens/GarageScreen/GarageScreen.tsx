import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './GaraScreenStyle'

export default function GarageScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cameraBox}>
        <View style={styles.triangleCorner}>

        </View>
      </View>
      <Text>GarageScreen</Text>
    </View>
  )
}