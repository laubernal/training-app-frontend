import * as React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

const Home = () => {
  return (
    <div className="ui menu">
      <Link className="ui header" to="/">
        Training app
      </Link>
      <div className="right menu">
        <Link className="item" to="/signup">
          Sign up
        </Link>
        <Link className="item" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
