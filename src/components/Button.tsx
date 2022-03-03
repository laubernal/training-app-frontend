import * as React from 'react';

// const { useState } = React;

type ButtonProps = {
  text: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: (e: any) => void;
};

export const Button = ({ text, type, onClick }: ButtonProps): JSX.Element => {
  // const [count, setCount] = useState(0);

  // const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
  //   e.preventDefault();
  //   setCount(count + 1);
  // };

  return (
    <div className="buttonLayout">
      <button
        className="ui button"
        type={type}
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          if (onClick) {
            onClick(e);
          }
        }}
      >
        {text}
      </button>
      {/* <h1>{`Button count: ${count}`}</h1> */}
    </div>
  );
};
