import React from "react";

export const Registration = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    props.navigateTo("Map")
  }

  const onSignIn = (e) => {
    e.preventDefault();
    props.navigateTo("Login")
  }

  return (
    <>
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="mail@mail.ru"
        />
        <label htmlFor="name">Как вас зовут?*</label>
        <input
          type="name"
          id="name"
          name="name"
          placeholder="Петр Александрович"
        />
        <label htmlFor="name">Придумайте пароль*</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="*************"
        />
        <input
          type="submit"
          id="signup"
          value="Зарегистрироваться"
        />
      </form>
      <div>
        <p>Уже зарегистрированы?</p>
      </div>
      <button onClick={onSignIn}>Войти</button>
    </>
  )
}

export default Registration;