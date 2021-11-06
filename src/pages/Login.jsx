import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authenticate } from '../actions';
import { Link, Redirect } from 'react-router-dom';

export class Login extends React.Component {

  authenticate = (event) => {
    event.preventDefault()
    const { email, password } = event.target;
    this.props.authenticate(email.value, password.value)
  }

  render() {
    return (
      <>
        <h1>Войти</h1>
        {
          this.props.isLoggedIn ? (
          <Redirect to="/map" />
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
              <Link to="/registration">Регистрация</Link>
            </div>
          )
        }
      </>
    );
  }
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func
};

export const LoginWithConnect = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { authenticate }
)(Login);