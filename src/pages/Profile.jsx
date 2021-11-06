import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

export class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDataChanged: false
    } 
  }
  
  render() {
    const isDataChanged = this.state;
    return (
      <>
        <h1>Профиль</h1>
        {
          isDataChanged ? (
            <div>
              <p>Введите платежные данные</p>
              <form>
                <label htmlFor="name">Имя владельца</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="USER NAME"
                  value=""
                />

                <label htmlFor="number">Номер карты</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  placeholder="0000 0000 0000 0000"
                  value=""
                />

                <label htmlFor="date">MM/YY</label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  placeholder="00/00"
                  value=""
                />

                <label htmlFor="code">CVC</label>
                <input
                  type="text"
                  id="code"
                  name="code"
                  placeholder="CVC"
                  value=""
                />
                <button type="submit">Сохранить</button>
              </form>
            </div>
          ) : (
            <div>
              <p>Платежные данные обновлены. Теперь вы можете заказывать такси.</p>
              <Link to="/map">Перейти на карту</Link>
            </div>
          )
        }
      </>
    )
  }
}

export const ProfileWithConnect = connect(
  null
)(Profile);