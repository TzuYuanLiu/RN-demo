import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Input from './components/input'
import Button from './components/Button'
import firebase from 'firebase'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  }

  onButtonPress() {
    const { email, password, error } = this.state
    this.setState({error: ''})
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed' })
          })
      })
  }

  render(){
    const { email, password, error } = this.state

    return(
      <View>
        <Input
          label={'Email'}
          placeholder={'sample@gmail.com'}
          value={email}
          onChangeText={text => this.setState({ email: text })}
        />

        <Input
          label={'Password'}
          placeholder={'Password'}
          value={password}
          onChangeText={text => this.setState({ password: text })}
          secureTextEntry
        />

        {error
          ? <View style={styles.hintContainer}><Text style={styles.hintStyle}>{error}</Text></View>
          : null
        }

        <Button
          label={'Confirm'}
          onButtonPress={() => this.onButtonPress()}
        />
      </View>
    )
  }
}

export default LoginForm

const styles = StyleSheet.create({
  hintStyle: {
    color: '#CE222B',
  },
  hintContainer: {
    width: '100%',
    height: 20,
    //justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
})