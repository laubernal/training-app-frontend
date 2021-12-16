import * as React from 'react';

type InputProps = {
  type: string;
  min?: string;
  placeholder?: string;
};

const InputComponent = ({ type, min, placeholder }: InputProps) => {
  return <input className="field" type={type} min={min} placeholder={placeholder} />;
};

export default InputComponent;
