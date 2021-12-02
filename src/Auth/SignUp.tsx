import React from 'react';

import ButtonComponent from '../components/ButtonComponent';
import SectionTitle from '../SectionTitle';
import '../Auth.css';

const SignUp = () => {
  return (
    <form className="ui form sign-up">
      <SectionTitle text="Sign Up" /> <br />
      <div className="field required">
        <label>Name</label>
        <div className="ui left icon input">
          <input type="text" placeholder="Enter your name" />
          <i className="user icon"></i>
        </div>
      </div>
      <div className="field required">
        <label>Email</label>
        <div className="ui left icon input">
          <input type="text"placeholder="Enter your email" />
          <i className="at icon"></i>
        </div>
      </div>
      <div className="field required">
        <label>Password</label>
        <div className="ui left icon input">
          <input type="password" placeholder="Enter your password" />
          <i className="lock icon"></i>
        </div>
        <br />
        <p className="warning">Password must have more than 8 characters</p>
      </div>
      <div className="field required">
        <label>Password Confirmation</label>
        <div className="ui left icon input">
          <input type="password" placeholder="Repeat your password" />
          <i className="lock icon"></i>
        </div>
      </div>
      <ButtonComponent text="Sign up" />
    </form>
  );
};

export default SignUp;
