import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Input from './components/input'
import Button from './components/Button'
import firebase from 'firebase'
import Spinner from './components/Spinner'

class LoginForm extends Component {
  constructor(props) {
    super()
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
    }

    this.onLoginFailed = this.onLoginFailed.bind(this)
    this.onLoginSuccess = this.onLoginSuccess.bind(this)
  }

  onButtonPress() {
    const { email, password } = this.state
    this.setState({
      error: '',
      loading: true,
    })
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => this.onLoginSuccess())
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => this.onLoginSuccess())
          .catch(() => {
            this.onLoginFailed()
          })
      })
  }

  onLoginSuccess() {
    const { email, password } = this.state
    this.setState({
      email: '',
      password: '',
      loading: false,
    })
  }

  onLoginFailed() {
    this.setState({
      loading: false,
      error: 'Authentication Failed',
    })
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner />
    }

    return (
      <Button
          label={'Confirm'}
          onButtonPress={() => this.onButtonPress()}
        />
    )
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
        <View style={{height: 50}}>
          {this.renderButton()}
        </View>
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
    //height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
})