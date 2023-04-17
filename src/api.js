export const serverLogIn = async (email, password) => {
  return fetch("https://loft-taxi.glitch.me/auth", {
    method: "POST",
    body: JSON.stringify({email: email, password: password}),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
};

export const addCard = async (data) => {
  return fetch("https://loft-taxi.glitch.me/card", {
    method: "POST",
    body: JSON.stringify({data}),
    headers: { "Content-Type": "application/json" },
  })
  .then((response) => response.json())
}

export const getCard = async (token) => {
  return fetch(`https://loft-taxi.glitch.me/card?token=${token}`)
    .then((response) => response.json())
};