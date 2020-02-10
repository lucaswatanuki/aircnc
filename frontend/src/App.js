import React, { useState } from 'react';
import './App.css';

import logo from './assets/logo.png';

function App() {
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    console.log(email);
  }


  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />
      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e econtre talentos
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>E-MAIL</label>
          <input
            type="email"
            id="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)} />

          <button className="btn" type="submit"> Entrar </button>
        </form>
      </div>
    </div>
  );
}

export default App;
