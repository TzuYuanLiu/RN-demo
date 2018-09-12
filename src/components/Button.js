import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default Button = ({label, onButtonPress}) =>
  <TouchableOpacity
    onPress={() => onButtonPress()}
    style={styles.buttonStyle}
  >
    <Text style={{color: '#E0E0E0', fontSize: 18}}>
      {label}
    </Text>
  </TouchableOpacity>

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: .1,
    shadowRadius: 2,
    backgroundColor: '#2C3445',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  }
})