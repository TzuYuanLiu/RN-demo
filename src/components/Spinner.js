import React from 'react'
import { View, ActivityIndicator } from 'react-native'

export default Spinner = () =>
  <View style={styles.spinnerStyle}>
    <ActivityIndicator size={'small'}/>
  </View>

const styles = {
  spinnerStyle: {
    flex: 1,
    justufyContent: 'center',
    alignItems: 'center',
  }
}