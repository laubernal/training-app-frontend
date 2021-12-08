import * as React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import ButtonComponent from '../components/ButtonComponent';
import SectionTitle from '../components/SectionTitle';
import SignUp from './SignUp';
import './Auth.css';

const Login = (): JSX.Element => {
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
      <div>
        <p>
          Need an account? <Link to="/signup">Sign up!</Link>
        </p>{' '}
        <br />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      <ButtonComponent text="Login" />
    </form>
  );
};

export default Login;
