import React from 'react';

export const Login = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    props.navigateTo("Map")
  }

  const onSignUp = (e) => {
    e.preventDefault();
    props.navigateTo("Registration")
  }

  return (
    <>
      <h2>Войти</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="mail@mail.ru"
        />
        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="*************"
        />
        <div>Забыли пароль?</div>
        <input
          type="submit"
          value="Войти"
        />
      </form>
      <div>
        <p>Новый пользователь?</p>
      </div>
      <button onClick={onSignUp}>Регистрация</button>
    </>
  )
}

export default Login;