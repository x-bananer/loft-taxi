import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { cardSuccess, getCardRequest } from '../actions';

export class Profile extends React.Component {

  state = {
    isDataChanged: false,
    cardName: null,
    cardNumber: null,
    expiryDate: null,
    cvc: null
  }

  componentDidMount() {
    const { cardName, cardNumber, expiryDate, cvc, token } = this.props;
    this.setState({
      cardName,
      cardNumber,
      expiryDate,
      cvc
    });
    this.props.getCardRequest(cardName, cardNumber, expiryDate, cvc, token)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { cardName, cardNumber, expiryDate, cvc } = this.state;
    const { token } = this.props;
    this.setState({
      isDataChanged: true
    });
    this.props.cardSuccess(cardName, cardNumber, expiryDate, cvc, token);
    console.log(cardName, cardNumber, expiryDate, cvc, token)
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { isDataChanged } = this.state
    return (
      <>
        <h1>Профиль</h1>
        {
          !isDataChanged ? (
            <div>
              <p>Введите платежные данные</p>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Имя владельца</label>
                <input
                  type="text"
                  id="name"
                  name="cardName"
                  placeholder="USER NAME"
                  value={this.state.cardName}
                  onChange={this.handleChange}
                />

                <label htmlFor="number">Номер карты</label>
                <input
                  type="text"
                  id="number"
                  name="cardNumber"
                  placeholder="0000 0000 0000 0000"
                  value={this.state.cardNubmer}
                  onChange={this.handleChange}
                />

                <label htmlFor="date">MM/YY</label>
                <input
                  type="text"
                  id="date"
                  name="expiryDate"
                  placeholder="00/00"
                  value={this.state.expiryDate}
                  onChange={this.handleChange}
                />

                <label htmlFor="code">CVC</label>
                <input
                  type="text"
                  id="code"
                  name="cvc"
                  placeholder="CVC"
                  value={this.state.cvc}
                  onChange={this.handleChange}
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
  state => ({
    cardName: state.profile.cardName,
    cardNumber: state.profile.cardNumber,
    expiryDate: state.profile.expiryDate,
    cvc: state.profile.cvc
  }),
  { cardSuccess, getCardRequest }
)(Profile);