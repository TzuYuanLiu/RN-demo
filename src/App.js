import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Container from './components/Container'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'
import LoginForm from './LoginForm'
import ReduxThunk from 'redux-thunk'

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDKZpm5xjzI5V7_dZSXlsO2GmgDZ4RDekc",
      authDomain: "auth-a1278.firebaseapp.com",
      databaseURL: "https://auth-a1278.firebaseio.com",
      projectId: "auth-a1278",
      storageBucket: "auth-a1278.appspot.com",
      messagingSenderId: "444396601884"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View style={styles.viewStyle}>
          <Container>
            <LoginForm />
          </Container>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#E7E7E7',
  }
})