import * as React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';

import { Button, SectionTitle } from '../components/index';
import { SignIn } from './index';
import './Auth.css';
import { useAuth } from './useAuth';

const { useState } = React;

export const SignUp = (): JSX.Element => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [showPasswordAlert, setShowPasswordAlert] = useState(false);

  const auth = useAuth();
  const navigate = useNavigate();

  const onInputClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>): void => {
    event.preventDefault();
    showPasswordAlert ? setShowPasswordAlert(false) : setShowPasswordAlert(true);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      await auth.signup(firstName, lastName, email, password, passwordConfirmation, () =>
        navigate('/', { replace: true })
      );
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <form className="ui form sign-up" onSubmit={handleSubmit}>
      <SectionTitle text="Sign Up" /> <br />
      <div className="field required">
        <label>First Name</label>
        <div className="ui left icon input">
          <input
            autoFocus
            type="text"
            placeholder="Enter your first name"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setFirstName(event.target.value);
            }}
          />
          <i className="user icon"></i>
        </div>
      </div>
      <div className="field required">
        <label>Last Name</label>
        <div className="ui left icon input">
          <input
            autoFocus
            type="text"
            placeholder="Enter your last name"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setLastName(event.target.value);
            }}
          />
          <i className="user icon"></i>
        </div>
      </div>
      <div className="field required">
        <label>Email</label>
        <div className="ui left icon input">
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
            }}
          />
          <i className="at icon"></i>
        </div>
      </div>
      <div className="field required">
        <label>Password</label>
        <div className="ui left icon input">
          <input
            type="password"
            placeholder="Enter your password"
            onClick={(event: React.MouseEvent<HTMLInputElement, MouseEvent>) => onInputClick(event)}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(event.target.value);
            }}
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
          <input
            type="password"
            placeholder="Repeat your password"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPasswordConfirmation(event.target.value);
            }}
          />
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
      <Button text="Sign up" type="submit" />
    </form>
  );
};
