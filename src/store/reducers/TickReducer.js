const initialState = {
  data: []
}
const TickReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'WEBSOCKET_MESSAGE_RECEIVED':
      return {
        ...state,
        data: [...state.data, payload]
      }
    default:
      return initialState;
  }
}

export default TickReducer