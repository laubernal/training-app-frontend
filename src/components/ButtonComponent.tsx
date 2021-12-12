import * as React from 'react';

// const { useState } = React;

type ButtonProps = {
  text: string;
  onClick: (e: any) => void;
};

const ButtonComponent = ({ text, onClick }: ButtonProps): JSX.Element => {
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

export default ButtonComponent;
