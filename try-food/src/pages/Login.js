import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import TryFoodWhite from '../images/tryfoodwhite.png';

function Login() {
  const [personData, setPersonData] = useState({
    email: '',
    password: 0,
    disabled: true,
  });

  const history = useHistory();

  useEffect(() => {
    /* const { email, password } = personData;
    const regexForEmail = /\S+@\S+\.\S+/;
    const length = 6; */
    /* const passwordIsValid = password.length > length;
    const emailIsValid = regexForEmail.test(email); */
    /* if (passwordIsValid && emailIsValid === true) {
      setPersonData({ disabled: false });
    } else {
      setPersonData({ disabled: true });
    } */
  }, [personData]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setPersonData({ ...personData, [name]: value });
  };

  const handleClick = () => {
    const information = {
      email: personData.email,
    };
    localStorage.setItem('login', JSON.stringify(information));
    history.push('/order');
  };

  return (
    <div className="login d-flex flex-column justify-content-center">
      <img src={ TryFoodWhite } alt="try food logo" width="250px" />
      <span className="slogan">Falta pouco para matar sua fome!</span>
      <form className="d-flex flex-column justify-content-center">
        <input
          className="form-control"
          name="email"
          type="email"
          placeholder="E-mail"
          onChange={ handleChange }
        />
        <input
          className="form-control"
          name="password"
          type="password"
          placeholder="Senha"
          onChange={ handleChange }
        />
        <button
          className="btn btn-outline-light"
          type="button"
          disabled={ personData.disabled }
          onClick={ handleClick }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
