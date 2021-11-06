export const serverLogIn = async (email, password) => {
  return fetch("https://loft-taxi.glitch.me/auth", {
    method: "POST",
    body: JSON.stringify({email: email, password: password}),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => ({ success: data.success, token: data.token }));
};

export const addCard = async (cardNumber, expiryDate, cardName, cvc, token) => {
  return fetch("https://loft-taxi.glitch.me/card", {
    method: "POST",
    body: JSON.stringify({cardNumber: cardNumber, expiryDate: expiryDate, cardName: cardName, cvc: cvc, token: token}),
    headers: { "Content-Type": "application/json" },
  })
  .then((response) => response.json())
  .then((data) => ({ success: data.success }));
}

export const getCard = async () => {
  
}