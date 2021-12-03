import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import Home from './Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="auth">
        <Home />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
