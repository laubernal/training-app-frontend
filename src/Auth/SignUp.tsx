import React from 'react';

import ButtonComponent from '../components/ButtonComponent';
import SectionTitle from '../SectionTitle';
import '../Auth.css';

const SignUp = () => {
  return (
    <div className="sign-up">
      <form>
        <SectionTitle text="Sign Up" />

        <div className="authInputs">
          <label>Name</label>
          <input type="text" id="name" placeholder="name" />
        </div>

        <div className="authInputs">
          <label>Email</label>
          <input type="text" id="email" placeholder="email" />
        </div>

        <div className="authInputs">
          <label>Password</label>
          <input type="text" id="password" placeholder="password" />
          <p className="warning">Password must have more than 8 characters</p>
        </div>

        <div className="authInputs">
          <label>Password Confirmation</label>
          <input type="text" id="passwordConfirmation" placeholder="passwordConfirmation" />
          <br />
        </div>

        <ButtonComponent text="Sign up" />
      </form>
    </div>
  );
};

export default SignUp;
