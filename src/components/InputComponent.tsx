import * as React from 'react';

type InputProps = {
  name?: string;
  type: string;
  min?: string;
  placeholder?: string;
  value?: number;
  handleInputChange?: Function;
  index?: number;
};

const InputComponent = ({
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
          console.log('input value', e.target.value);
          handleInputChange(e, index);
        }
      }}
    />
  );
};

export default InputComponent;
