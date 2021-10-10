import React from 'react';
import Logo from '../components/Logo';

class Header extends React.Component {
  render() {
    return (
      <>
        <div>
          <Logo />
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => this.props.navigateTo("Map")}
                >Карта</button>
              </li>
              <li>
                <button
                  onClick={() => this.props.navigateTo("Profile")}
                >Профиль</button>
              </li>
              <li>
                <button
                  onClick={() => this.props.navigateTo("Login")}
                >Выйти</button>
              </li>
            </ul>
          </nav>
        </div>
      </>
    )
  }
}

export default Header;