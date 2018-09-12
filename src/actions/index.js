import firebase from 'firebase'

export const loginUser = (email, password) => {
  console.log('email, password', email, password)
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => dispatch({
        type: 'USER_LOGIN_SUCCESS', payload: user
      }))
      .catch((err) => {
        console.log(err)
      })
  }
}