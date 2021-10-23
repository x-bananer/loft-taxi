import React from 'react';
import PropTypes from 'prop-types';

import './App.css';

import { Registration } from './pages/Registration';
import { LoginWithAuth } from './pages/Login';
import { MapWithAuth } from './pages/Map';
import { ProfileWithAuth } from './pages/Profile';
import { withAuth } from './AuthContext'

const PAGES = {
  Registration: (props) => <Registration {...props} />,
  Login: (props) => <LoginWithAuth {...props} />,
  Map: (props) => <MapWithAuth {...props} />,
  Profile: (props) => <ProfileWithAuth {...props} />
}

class App extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool
  }

  state = { currentPage: "Login" }

  navigateTo = (page) => {
    if (this.props.isLoggedIn || page === "Registration") {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: "Login" });
    }
  }

  unauthentificate = () => {
    this.props.logOut();
    this.navigateTo("Login");
  };

  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <button onClick={this.unauthentificate}>
                  Выйти
                </button>
              </li>
              <li>
                <button onClick={() => {
                  this.navigateTo("Map")
                }}>
                  Карта
                </button>
              </li>
              <li>
                <button onClick={() => {
                  this.navigateTo("Profile")
                }}>
                  Профиль
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main data-testid="container">
          <section>
            {PAGES[this.state.currentPage]({ navigate: this.navigateTo })}
          </section>
        </main>
      </>
    )
  }
}

export default withAuth(App);