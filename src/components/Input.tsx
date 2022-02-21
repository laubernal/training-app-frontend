import * as React from 'react';
import { InputProps } from '../types';

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
          console.log('VALUE', value);
        }
      }}
    />
  );
};
