import React from 'react';

type ButtonProps = {
  text: string;
};

const ButtonComponent = ({ text }: ButtonProps): JSX.Element => {
  return (
    <div className="button">
      <button>{text}</button>
    </div>
  );
};

export default ButtonComponent;
