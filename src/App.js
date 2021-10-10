import React from 'react';

import Registration from './pages/Registration';
import Login from './pages/Login';
import Map from './pages/Map';
import Profile from './pages/Profile';
import Header from './components/Header'

import './App.css';

class App extends React.Component {
  state = { currentPage: "" }

  navigateTo = (page) => {
    this.setState({ currentPage: page })
  }

  render() {
    return (
      <>
        <Header navigateTo={this.navigateTo} />
        <main>
          <section>
            {
              {
                Registration: <Registration navigateTo={this.navigateTo}/>,
                Login: <Login navigateTo={this.navigateTo} />,
                Map: <Map />,
                Profile: <Profile />
              }[this.state.currentPage]
            }
          </section>
        </main>
      </>
    )
  }
}

export default App;