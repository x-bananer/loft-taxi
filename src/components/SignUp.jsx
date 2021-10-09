import React, { useState } from 'react';

export const SignUp = ({ currentPage }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <h2>Регистрация</h2>
      <form onSubmit={handleChange}>
        <label htmlFor="email">Email*</label>
        <input
          value={email}
          type="email"
          placeholder="mail@mail.ru"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="name">Как вас зовут?*</label>
        <input
          value={name}
          type="name"
          placeholder="Петр Александрович"
          id="name"
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="name">Придумайте пароль*</label>
        <input
          value={password}
          type="password"
          placeholder="*************"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="submit"
          id="signup"
          value="Зарегистрироваться"
          onClick={() => currentPage('map')}
        />
      </form>
      <div>
        <p>Уже зарегистрированы?</p>
      </div>
    </div>
  )
}

export default SignUp;