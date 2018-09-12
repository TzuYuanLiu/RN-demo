import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

export default Card = (props) =>
  <View style={styles.containerStyle}>
    {props.children}
  </View>

const styles = StyleSheet.create({
  containerStyle: {
    width: '90%',
  }
})