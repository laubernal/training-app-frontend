import * as React from 'react';

import ButtonComponent from '../ButtonComponent';
import SectionTitle from '../SectionTitle';
import '../Login.css';

const Login = () => {
  return (
    <div className="login">
      <SectionTitle text="Login" />
      <h4>Email</h4>
      <input type="text" id="email" placeholder="email" />
      <br />
      <h4>Password</h4>
      <input type="text" id="password" placeholder="password" />
      <br />
      <ButtonComponent text="Submit" />
    </div>
  );
};

export default Login;
