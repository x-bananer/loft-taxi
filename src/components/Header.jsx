import React from 'react';
import Logo from '../components/Logo';
import Menu from '../components/Menu';

export const Header = ({ currentPage }) => {
  return (
    <div>
      <Logo />
      <Menu currentPage={currentPage} />
    </div>
  )
}

export default Header;