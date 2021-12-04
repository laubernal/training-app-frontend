import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import TopNavBar from './TopNavBar';
import './App.css';
import Home from './Home/Home';

const App = () => {
  return (
    <Router>
      <div className="auth">
        <TopNavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/signup/*" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
