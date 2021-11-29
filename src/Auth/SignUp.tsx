import React from 'react';

import ButtonComponent from '../ButtonComponent';
import SectionTitle from '../SectionTitle';

const SignUp = () => {
  return (
    <div className="sign-up">
      <SectionTitle text="Sign Up" />
      <h4>Name</h4>
      <input type="text" id="name" placeholder="name" />

      <h4>Email</h4>
      <input type="text" id="email" placeholder="email" />

      <h4>Password</h4>
      <input type="text" id="password" placeholder="password" />

      <h4>Password Confirmation</h4>
      <input type="text" id="passwordConfirmation" placeholder="passwordConfirmation" />
      <br />

      <ButtonComponent text="Submit" />
    </div>
  );
};

export default SignUp;
