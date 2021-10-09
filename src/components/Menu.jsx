import React from 'react';

export const Menu = ({ currentPage }) => {
  return (
    <div className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <button
            className="menu__btn"
            onClick={() => currentPage('map')}
          >Карта</button>
        </li>
        <li className="menu__item">
          <button
            className="menu__btn"
            onClick={() => currentPage('profile')}
          >Профиль</button>
        </li>
        <li className="menu__item">
          <button
            className="menu__btn"
            onClick={() => currentPage('login')}
          >Выйти</button>
        </li>
      </ul>
    </div>
  )
}

export default Menu;