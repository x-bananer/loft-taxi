import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Switch, Route } from 'react-router-dom';
import { logOut } from './actions';

import './App.css';
import './index.css'

import { Registration } from './pages/Registration';
import { LoginWithConnect } from './pages/Login';
import { MapWithConnect } from './pages/Map';
import { ProfileWithConnect } from './pages/Profile';
import { PrivateRoute } from './components/PrivateRoute';

//styles
import { Logo } from 'loft-taxi-mui-theme';
import { AppBar, Toolbar, Button } from "@material-ui/core"

class App extends React.Component {

  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
  };

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',  height: '100%'}}>
        <AppBar position="static" style={{background: "#fff"}}>
          <Toolbar>
            <span style={{flexGrow: 1}}>
              <Logo />
            </span>
            <ul>
              <Button>
                <Link style={{color: "#000", textDecoration: "none"}} to="/map">
                  Карта
                </Link>
              </Button>
              <Button>
                <Link style={{color: "#000", textDecoration: "none"}} to="/profile">
                  Профиль
                </Link>
              </Button>
              <Button>
                <Link style={{color: "#000", textDecoration: "none"}} onClick={this.unauthenticate} to="/">
                  Выйти
                </Link>
              </Button>
            </ul>
          </Toolbar>
        </AppBar>
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
      </div>
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