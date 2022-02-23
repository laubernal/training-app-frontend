import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { SignIn, SignUp } from './Auth/index';
import { TopNavBar } from './components/index';
import { Home } from './Home/Home';
import { NewTraining } from './Trainings/index';
import './App.css';
import { Categories } from './Trainings/Categories';

export const App = () => {
  return (
    <Router>
      <div className="auth">
        <TopNavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin/*" element={<SignIn />} />
          <Route path="/signup/*" element={<SignUp />} />
          <Route path="/new/*" element={<NewTraining />} />
          <Route path="/categories/" element={<Categories/>}/>
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
