import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SignIn, SignUp } from './Auth/index';
import { Header } from './components/index';
import { Home } from './Home/Home';
import { NewTraining } from './Trainings/index';
import './App.css';
import { RequireAuth } from './Auth/RequireAuth';
import { AuthProvider } from './Context/AuthProvider';
import { SignOut } from './Auth/SignOut';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="auth">
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin/*" element={<SignIn />} />
            <Route path="/signup/*" element={<SignUp />} />
            <Route path="/signout/*" element={<SignOut />} />
            <Route
              path="/trainings/new/*"
              element={
                <RequireAuth>
                  <NewTraining />
                </RequireAuth>
              }
            />
          </Routes>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
