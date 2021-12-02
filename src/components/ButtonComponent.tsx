import React from 'react';

type ButtonProps = {
  text: string;
};

const ButtonComponent = ({ text }: ButtonProps): JSX.Element => {
  return (
    <div className="buttonLayout">
      <button className="ui button">{text}</button>
    </div>
  );
};

export default ButtonComponent;
