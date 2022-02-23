import * as React from 'react';
import { ButtonProps } from '../types';

// const { useState } = React;

export const  Button = ({ text, onClick }: ButtonProps): JSX.Element => {
  // const [count, setCount] = useState(0);

  // const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
  //   e.preventDefault();
  //   setCount(count + 1);
  // };

  return (
    <div className="buttonLayout">
      <button
        className="ui button"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onClick(e)}
      >
        {text}
      </button>
      {/* <h1>{`Button count: ${count}`}</h1> */}
    </div>
  );
};
