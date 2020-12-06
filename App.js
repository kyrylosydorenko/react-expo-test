import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { useFonts } from 'expo-font'

import Input from './components/Input'
import Button from './components/Button'
import Logo from './components/Logo'
import Title from './components/Title'
import BarCode from './components/BarCode'

export default function App() {
  const [scanned, setScanned] = useState(false)
  const [loaded] = useFonts({
    Butler: require('./assets/fonts/Butler.otf'),
    Poppins: require('./assets/fonts/Poppins.ttf')
  })

  if (!loaded) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.main}>
        {scanned ? (
          <BarCode scanned={scanned} handleFunction={() => setScanned(false)} />
        ) : (
          <>
            <Logo />
            <View>
              <Title text="Enter you details" />
              <Input placeholder="Your full name" />
              <Input placeholder="Your Email" />
            </View>
            <Button title="Next" handleOnPress={() => setScanned(true)} />
          </>
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between'
  },
  main: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 40
  }
})
