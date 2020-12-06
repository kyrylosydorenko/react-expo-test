import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import PropTypes from 'prop-types'

import Button from './Button'


const BarCode = ({ scanned, handleFunction }) => {
  const [hasPermission, setHasPermission] = useState(null)

  useEffect(() => {
    ;(async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  const handleBarCodeScanned = ({ type, data }) => {
    handleFunction()
    alert(`Bar code with type ${type} and data ${data} has been scanned!`)
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <BarCodeScanner
      onBarCodeScanned={!scanned ? undefined : handleBarCodeScanned}
      style={StyleSheet.absoluteFillObject}
    >
      <View style={styles.wrapper}>
        <Button title="Back" handleOnPress={() => handleFunction()} />
      </View>
    </BarCodeScanner>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column-reverse',
    paddingHorizontal: 20,
    paddingBottom: 20
  }
})

BarCode.propTypes = {
  scanned: PropTypes.bool.isRequired,
  handleFunction: PropTypes.func.isRequired
}

export default BarCode
