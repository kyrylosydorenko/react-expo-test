import React, { useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'

import PropTypes from 'prop-types'

const Input = ({ placeholder }) => {
  const [value, setValue] = useState('')
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      value={value}
      onChangeText={(text) => setValue(text)}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    fontFamily: 'Poppins',
    borderColor: '#E1E1E1',
    color: '#C4C4C4',
    paddingHorizontal: 20,
    paddingVertical: 18,
    marginTop: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    fontSize: 14,
    lineHeight: 25
  }
})

Input.propTypes = {
  placeholder: PropTypes.string
}

export default Input
