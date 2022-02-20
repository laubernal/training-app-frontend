import * as React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from './index';

export const TopNavBar = (): JSX.Element => {
  return (
    <div className="ui menu">
      <Link className="ui header" to="/">
        <SectionTitle text="Training App" />
      </Link>

      <div className="right menu">
        <Link className="item" to="/new">
          New training
        </Link>
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
