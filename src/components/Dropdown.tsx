import * as React from 'react';

const { useState } = React;

type dropdownProps = {
  options: {}[];
  label: string;
  selected: { label: string; value: string };
  onSelectedChange: Function;
};

const Dropdown = ({ options, label, selected, onSelectedChange }: dropdownProps) => {
  const [open, setOpen] = useState(false);

  const renderedOptions = options.map((option: { [key: string]: string }) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div className={`ui selection dropdown`} onClick={() => setOpen(!open)}>
          {/* <div className={`ui selection dropdown visible active`}> */}
          <i className="dropdown icon"></i>
          <div className="text">
            <div className="menu transition">
              {/* <div className="menu visible transition"> */}
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
