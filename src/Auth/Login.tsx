import * as React from 'react';

import ButtonComponent from '../ButtonComponent';

const Login = () => {
  return (
    <div>
      <input type="text" id="email" placeholder="email" /> <br />
      <br />
      <input type="text" id="password" placeholder="password" /> <br />
      <br />
      <ButtonComponent text="Submit" />
    </div>
  );
};

export default Login;
