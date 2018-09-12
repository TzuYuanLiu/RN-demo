import { LOGIN_USER } from '../actions/index'

const initState = {
  loading: false,
  error: '',
}

export default (state = initState, action) => {
  console.log('action', action)

  switch (action.type) {
    case LOGIN_USER:
      return {...state}
    default:
      return state;
  }
}