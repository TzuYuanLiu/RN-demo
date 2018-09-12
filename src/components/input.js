import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default Input = ({ label, placeholder, onChangeText, value, secureTextEntry }) =>
  <View style={styles.containerStyle}>
    <Text style={styles.labelStyle}>{label}</Text>
    <TextInput
      secureTextEntry={secureTextEntry}
      style={styles.inputStyle}
      placeholder={placeholder}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  </View>

  const styles = StyleSheet.create({
    containerStyle: {
      height: 50,
      borderWidth: 1,
      borderColor: '#b5b3b2',
      borderRadius: 25,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    labelStyle: {
      flex: 1,
      marginLeft: 20,
      color: '#404040',
    },
    inputStyle: {
      flex: 2,
    }
  })
