import * as React from 'react';

import ButtonComponent from '../components/ButtonComponent';
import SectionTitle from '../SectionTitle';
import '../Auth.css';

const Login = () => {
  return (
    <form className="ui form login">
      <SectionTitle text="Login" /> <br />
      <div className="field required">
        <label>Email</label>
        <div className="ui left icon input">
          <input type="text" placeholder="Enter your email" />
          <i className="at icon"></i>
        </div>
      </div>
      <div className="field required">
        <label>Password</label>
        <div className="ui left icon input">
          <input type="password" placeholder="Enter your password" />
          <i className="lock icon"></i>
        </div>
      </div>
      <ButtonComponent text="Login" />
    </form>
  );
};

export default Login;
