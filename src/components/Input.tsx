import * as React from 'react';

type InputProps = {
  name?: string;
  type: string;
  min?: string;
  placeholder?: string;
  handleInputChange?: Function;
  index?: number;
};

const Input = ({
  name,
  type,
  min,
  placeholder,
  handleInputChange,
  index,
}: InputProps) => {
  return (
    <input
      className="field"
      name={name}
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

export default Input;
