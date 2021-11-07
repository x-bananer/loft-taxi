import { CARD_REQUEST, GET_CARD_REQUEST, cardSuccess, cardError, getCardSuccess, getCardError } from "./actions";
import { addCard, getCard } from "./api";

export const profileMiddleware = (store) => (next) => async (action) => {
  if (action.type === CARD_REQUEST) {
    const {cardName, cardNumber, expiryDate, cvc, token} = action.payload;
    const data = await addCard({cardName, cardNumber, expiryDate, cvc, token});
    console.log(data);
    if (data.success) {
      store.dispatch(cardSuccess({cardName, cardNumber, expiryDate, cvc}))
    } else {
      store.dispatch(cardError(data.error))
    }
  } 

  if (action.type === GET_CARD_REQUEST) {
    const token = action.payload;
    const data = await getCard(token);
    if(data.id) {
      store.dispatch(getCardSuccess(data))
    } else {
      store.dispatch(getCardError(data.error))
    }
  }


  next(action)
}