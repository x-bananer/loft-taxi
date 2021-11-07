import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authenticate } from '../actions';
import { Link, Redirect } from 'react-router-dom';

//styles
import { Card, CardContent, TextField } from "@material-ui/core"

export class Login extends React.Component {

  authenticate = (event) => {
    event.preventDefault()
    const { email, password } = event.target;
    this.props.authenticate(email.value, password.value)
  }

  render() {
    return (
        <Card variant="outlined" style={{width: '480px', height: '440px'}}>
          <CardContent style={{display: 'flex', flexDirection: 'column'}}>
            <h1>Войти</h1>
            {
              this.props.isLoggedIn ? (
              <Redirect to="/map" />
              ) : (
                <div>
                  <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} onSubmit={this.authenticate}>
                    <label htmlFor="email">Email</label>
                    <TextField variant="standard"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="mail@mail.ru"
                    />
                    <label htmlFor="password">Пароль</label>
                    <TextField variant="standard"
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
          </CardContent>
        </Card>
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