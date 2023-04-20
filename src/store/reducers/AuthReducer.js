const initialState = {
  isLoggedin: false,
  error: null
}
const AuthReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedin: true
      }
    case 'AUTHENTICATION_FAILED':
      return {
        ...state,
        isLoggedin: false,
        error: payload
      }
    default:
      return initialState;
  }
}

export default AuthReducer