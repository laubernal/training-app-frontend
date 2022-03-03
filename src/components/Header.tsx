import * as React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from './index';

export const Header = (): JSX.Element => {
  return (
    <div className="ui menu">
      <Link className="ui header" to="/">
        <SectionTitle text="Training App" />
      </Link>

      <div className="right menu">
        <Link className="item" to="/trainings/new">
          New training
        </Link>
        <Link className="item" to="/signup">
          Sign up
        </Link>
        <Link className="item" to="/signin">
          Sign in
        </Link>
      </div>
    </div>
  );
};
