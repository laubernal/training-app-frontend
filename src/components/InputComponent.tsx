import * as React from 'react';

type InputProps = {
  type: string;
  min?: string;
  placeholder?: string;
  handleInputChange?: Function;
  index?: number;
};

const InputComponent = ({ type, min, placeholder, handleInputChange, index }: InputProps) => {
  return (
    <input
      className="field"
      type={type}
      min={min}
      placeholder={placeholder}
      onChange={e => {
        if (handleInputChange) {
          handleInputChange(e, index);
        }
      }}
    />
  );
};

export default InputComponent;
