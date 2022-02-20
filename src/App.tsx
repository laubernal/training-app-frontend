import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Login, SignUp } from './Auth/index';
import { TopNavBar } from './components/index';
import './App.css';
import { Home } from './Home/Home';
import { NewTraining } from './Trainings/index';

export const App = () => {
  return (
    <Router>
      <div className="auth">
        <TopNavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/signup/*" element={<SignUp />} />
          <Route path="/new/*" element={<NewTraining />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
