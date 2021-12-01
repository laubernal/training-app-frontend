import * as React from 'react';

import ButtonComponent from '../components/ButtonComponent';
import SectionTitle from '../SectionTitle';
import '../Auth.css';

const Login = () => {
  return (
    <div className="login">
      <SectionTitle text="Log in" />

      <div className="authInputs">
        <label>Email</label>
        <input type="text" id="email" placeholder="Enter your email" />
      </div>

      <div className="authInputs">
        <label>Password</label>
        <input type="text" id="password" placeholder="Enter your password" />
      </div>

      <ButtonComponent text="Log in" />
    </div>
  );
};

export default Login;
