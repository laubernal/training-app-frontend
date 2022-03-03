import * as React from 'react';

type InputProps = {
  name?: string;
  type: string;
  min?: string;
  placeholder?: string;
  value?: string;
  handleInputChange?: Function;
  index?: number;
};

export const Input = ({
  name,
  type,
  min,
  placeholder,
  value,
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
      value={value}
      onChange={e => {
        if (handleInputChange) {
          handleInputChange(e, index);
        }
      }}
    />
  );
};
