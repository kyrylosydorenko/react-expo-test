import React from 'react'
import { Text, StyleSheet } from 'react-native'

import PropTypes from 'prop-types'

const Title = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Butler',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    lineHeight: 29
  }
})

Title.propTypes = {
  text: PropTypes.string.isRequired
}

export default Title
