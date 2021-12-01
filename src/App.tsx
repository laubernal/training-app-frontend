import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import './App.css';

const App = () => {
  return (
    <div className="auth">
      <Login />
      <SignUp />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
