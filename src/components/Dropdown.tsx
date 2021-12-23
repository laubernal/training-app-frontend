import * as React from 'react';

const { useState, useEffect, useRef } = React;

type dropdownProps = {
  options: { label: string; value: string }[];
  label: string;
  selected: { label: string; value: string };
  onSelectedChange: Function;
};

const Dropdown = ({ options, label, selected, onSelectedChange }: dropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const onBodyClick = (event: any) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    document.addEventListener('click', onBodyClick);

    return () => {
      document.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option: { [key: string]: string }) => {
    return (
      <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <i className="dropdown icon"></i>
          <div className={`text ${selected.value === 'default' ? 'default' : ''}`}>
            {selected.label}
          </div>
          <div className={`menu  ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
