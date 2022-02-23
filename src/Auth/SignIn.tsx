import * as React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { Button, SectionTitle, Input } from '../components/index';
import { SignUp } from './index';
import './Auth.css';
import axios from 'axios';

export const SignIn = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    const response = await axios.post('/signin', { email, password });
    console.log(response);
  };

  return (
    <form className="ui form login">
      <SectionTitle text="Sign in" /> <br />
      <div className="field required">
        <label>Email</label>
        <div className="ui left icon input">
          <Input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={email}
            handleInputChange={(e: any) => {
              setEmail(e.target.value);
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
            handleInputChange={(e: any) => {
              setPassword(e.target.value);
            }}
          />
          {/* <input type="password" placeholder="Enter your password" /> */}
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
      <Button
        text="Sign in"
        onClick={async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          await signIn();
        }}
      />
    </form>
  );
};
