import React, { useState } from 'react';

import { Login } from './pages/Login';
import { Map } from './pages/Map';
import { Profile } from './pages/Profile';
import { Header } from './components/Header'

import './App.css';

const App = () => {
  const [activePage, currentPage] = useState('login');
  const header = <Header currentPage={ currentPage } />
  const pages = {
    login: <Login activePage = { activePage } currentPage = { currentPage } />,
    profile: <Profile />,
    map: <Map />,
  }

  return (
    <div>
      {activePage !== 'login' && <div>{ header }</div>}
      {pages[activePage]}
    </div>
  )
}

export default App;