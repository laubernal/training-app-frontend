import * as React from 'react';
import { InputProps } from '../types';

export const Input = ({ name, type, min, placeholder, handleInputChange, index }: InputProps) => {
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
