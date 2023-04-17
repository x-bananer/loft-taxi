import { CARD_REQUEST, CARD_SUCCESS, CARD_ERROR, GET_CARD_REQUEST, GET_CARD_SUCCESS, GET_CARD_ERROR } from '../actions';

const initialState = {
  isLoading: false,
  data: {cardName: null, cardNumber: null, expiryDate: null, cvc: null},
  error: ''
}

export default function profileReducer(state = initialState, action) {
  switch(action.type) {
    case CARD_REQUEST: {
      return {
        ...state,
        isLoading: true
      }
    }
    case CARD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: ''
      }
    }
    case CARD_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    }

    case GET_CARD_REQUEST: {
      return {
        ...state, 
        isLoading: true
      }
    }
    case GET_CARD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: ''
      }
    }
    case GET_CARD_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    }
    default:
      return state
  }
}