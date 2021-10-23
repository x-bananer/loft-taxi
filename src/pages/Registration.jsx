import React from "react";
import { withAuth } from '../AuthContext';
import PropTypes from 'prop-types';

export class Registration extends React.Component {

  static propTypes = {
    logIn: PropTypes.func
  }

  goToLogin = () => {
    this.props.navigate("Login")
  }
  
  render() {
    return (
      <>
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
        <button onClick={this.goToLogin}>Войти</button>
      </>
    );
  }
}

export const RegistrationWithAuth = withAuth(Registration);