import React from 'react';
import { withAuth } from '../AuthContext';
import PropTypes from 'prop-types';

export class Login extends React.Component {

  static propTypes = {
    navigate: PropTypes.func,
    logIn: PropTypes.func
  }

  goToRegistration = () => {
    this.props.navigate("Registration")
  }

  authenticate = (event) => {
    event.preventDefault()
    const { email, password } = event.target;
    this.props.logIn(email.value, password.value)
  }

  render() {
    return (
      <>
        {
          this.props.isLoggedIn ? (
            this.props.navigate("Map")
          ) : (
            <div>
              <form onSubmit={this.authenticate}>
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
              <button type="submit">Войти</button>
              </form>
              <p>Новый пользователь?</p>
              <button onClick={this.goToRegistration}>Регистрация</button>
            </div>
          )
        }
      </>
    );
  }
}

export const LoginWithAuth = withAuth(Login);