import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Switch, Route } from 'react-router-dom';
import { logOut } from './actions';

import './App.css';

import { Registration } from './pages/Registration';
import { LoginWithConnect } from './pages/Login';
import { MapWithConnect } from './pages/Map';
import { ProfileWithConnect } from './pages/Profile';
import { PrivateRoute } from './components/PrivateRoute';

class App extends React.Component {

  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
  };

  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <Link onClick={this.unauthenticate} to="/">
                  Выйти
                </Link>
              </li>
              <li>
                <Link to="/map">Карта</Link>
              </li>
              <li>
                <Link to="/profile">Профиль</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main data-testid="container">
          <section>
          <Switch>
            <Route exact path="/" component={LoginWithConnect} />
            <Route path="/registration" component={Registration} />
            <PrivateRoute path="/map" component={MapWithConnect} />
            <PrivateRoute path="/profile" component={ProfileWithConnect} />
          </Switch>
          </section>
        </main>
      </>
    )
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn}),
  { logOut }
)(App);