import React from 'react';

type ButtonProps = {
  text: string;
};

const ButtonComponent = ({ text }: ButtonProps): JSX.Element => {
  return (
    <div>
      <button>{text}</button>
    </div>
  );
};

export default ButtonComponent;
