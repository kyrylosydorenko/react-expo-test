import React from 'react'
import { TouchableOpacity, Alert, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Button = ({ title, handleOnPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleOnPress}>
      <Text style={styles.text_button}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDBF5A',
    borderRadius: 12,
    height: 60
  },
  text_button: {
    fontFamily: 'Poppins',
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 22
  }
})

Button.propTypes = {
  title: PropTypes.string.isRequired,
  handleOnPress: PropTypes.func.isRequired
}

export default Button
