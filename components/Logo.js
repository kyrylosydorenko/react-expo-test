import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import logo from '../assets/logo.png'

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.size} source={logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  size: {
    width: 72,
    height: 72
  }
})

export default Logo
