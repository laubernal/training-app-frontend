import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Login from './Auth/Login';

const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <Login />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
