import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Login from './Auth/Login';
import SignUp from './Auth/SignUp';

const App = () => {
  return (
    <div>
      <Login />
      <SignUp />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
