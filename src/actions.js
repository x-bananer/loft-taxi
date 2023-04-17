export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";

export const logIn = (email, password, token) => ({ type: LOG_IN, payload: {email, password, token}});
export const logOut = () => ({ type: LOG_OUT });
export const authenticate = (email, password, token) => ({ type: AUTHENTICATE, payload: { email, password, token }});

export const CARD_REQUEST = "CARD_REQUEST";
export const CARD_SUCCESS = "CARD_SUCCESS";
export const CARD_ERROR = "CARD_ERROR";

export const cardRequest = ({cardName, cardNumber, expiryDate, cvc, token}) => ({ type: CARD_REQUEST, payload: {cardName, cardNumber, expiryDate, cvc, token}});
export const cardSuccess = ({cardName, cardNumber, expiryDate, cvc, token}) => ({ type: CARD_SUCCESS, payload: {cardName, cardNumber, expiryDate, cvc, token} });
export const cardError = (error) => ({ type: CARD_ERROR, payload: error });

export const GET_CARD_REQUEST = "GET_CARD_REQUEST";
export const GET_CARD_SUCCESS = "GET_CARD_SUCCESS";
export const GET_CARD_ERROR = "GET_CARD_ERROR";

export const getCardRequest = (token) => ({ type: GET_CARD_REQUEST, payload: token });
export const getCardSuccess = ({cardName, cardNumber, expiryDate, cvc}) => ({ type: GET_CARD_SUCCESS, payload: {cardName, cardNumber, expiryDate, cvc}});
export const getCardError = (error) => ({ type: GET_CARD_ERROR, payload: error });