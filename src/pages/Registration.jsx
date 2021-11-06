import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class Registration extends React.Component {
  
  render() {
    return (
      <>
        <h1>Регистрация</h1>
        <form>
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="mail@mail.ru"
        />
        <label htmlFor="name">Как вас зовут?*</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Петр Александрович"
        />
         <label htmlFor="password">Придумайте пароль*</label>
         <input
          type="password"
          id="password"
          name="password"
          placeholder="*************"
        />
        <button type="submit">Зарегистрироваться</button>
        </form>
        <p>Уже зарегистрированы?</p>
        <Link to="/">Войти</Link>
      </>
    );
  }
}

export default connect(
  null
)(Registration);