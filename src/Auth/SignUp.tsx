import * as React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import { Button, SectionTitle } from '../components/index';
import { SignIn } from './index';
import './Auth.css';

const { useState } = React;

export const SignUp = (): JSX.Element => {
  const [name, setName] = useState('');
  const [showPasswordAlert, setShowPasswordAlert] = useState(false);

  const onInputClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>): void => {
    e.preventDefault();
    showPasswordAlert ? setShowPasswordAlert(false) : setShowPasswordAlert(true);
  };

  return (
    <form className="ui form sign-up">
      <SectionTitle text="Sign Up" /> <br />
      <div className="field required">
        <label>Name</label>
        <div className="ui left icon input">
          <input
            autoFocus
            type="text"
            placeholder="Enter your name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
              console.log(name);
            }}
          />
          <i className="user icon"></i>
        </div>
      </div>
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
          <input
            type="password"
            placeholder="Enter your password"
            onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => onInputClick(e)}
          />
          <i className="lock icon"></i>
        </div>
        {showPasswordAlert ? (
          <div className="ui pointing red basic small label">
            Your password must be at least 6 characters
          </div>
        ) : null}
      </div>
      <div className="field required">
        <label>Password Confirmation</label>
        <div className="ui left icon input">
          <input type="password" placeholder="Repeat your password" />
          <i className="lock icon"></i>
        </div>
      </div>
      <div>
        <p>
          Already have an account? <Link to="/signin">Sign in!</Link>
        </p>{' '}
        <br />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
      <Button
        text="Sign up"
        type="submit"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log('clicked')}
      />
    </form>
  );
};
