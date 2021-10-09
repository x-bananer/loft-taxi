import React, { useState } from 'react';

export const SignIn = ({ currentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <h2>Войти</h2>
      <form onSubmit={handleChange}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="email"
          placeholder="mail@mail.ru"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Пароль</label>
        <input
          value={password}
          id="password"
          type="password"
          placeholder="*************"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="submit"
          value="Войти"
          onClick={() => currentPage('map')}
        />
      </form>
      <div>
          <p>Новый пользователь?</p>
        </div>
    </div>
  )
}

export default SignIn;