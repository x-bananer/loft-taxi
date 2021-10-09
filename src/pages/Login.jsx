import React, {useState} from 'react';
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'

export const Login = ({ activePage, currentPage }) => {

  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div>
      {isRegistered ?
        <SignIn activePage = {activePage} currentPage = {currentPage} />
      :
        <SignUp activePage = {activePage} currentPage = {currentPage} />
      }
      <button type="button" onClick={() => setIsRegistered(!isRegistered)}>
        {isRegistered ? 'Зарегистрироваться' : 'Войти'}
      </button>
    </div>
  )
}

export default Login;