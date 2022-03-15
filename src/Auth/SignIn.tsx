import * as React from 'react';
import { Link, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

import { Button, SectionTitle, Input } from '../components/index';
import { SignUp } from './index';
import { useAuth } from './useAuth';
import './Auth.css';

export const SignIn = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      await auth.signin(email, password, () => navigate(from, { replace: true }));
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <form className="ui form login" onSubmit={handleSubmit}>
      <SectionTitle text="Sign in" /> <br />
      <div className="field required">
        <label>Email</label>
        <div className="ui left icon input">
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            handleInputChange={(event: any) => {
              setEmail(event.target.value);
            }}
          />
          {/* <input autoFocus type="text" placeholder="Enter your email" /> */}
          <i className="at icon"></i>
        </div>
      </div>
      <div className="field required">
        <label>Password</label>
        <div className="ui left icon input">
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            handleInputChange={(event: any) => {
              setPassword(event.target.value);
            }}
          />
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
      <Button text="Sign in" type="submit" />
    </form>
  );
};
