import * as React from 'react';

import ButtonComponent from '../components/ButtonComponent';
import InputComponent from '../components/InputComponent';

// const { useState } = React;

const SetsDataComponent = (): JSX.Element => {
  // const [removeSet, setRemoveSet] = useState(null);

  const onRemoveButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    console.log('clicked remove');
  };

  return (
    <div
      className="inline"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 0.5fr)',
        gap: '0px 10px',
      }}
    >
      <InputComponent type="number" min="1" placeholder="Set" />
      <InputComponent type="number" min="1" placeholder="Reps" />
      <i className="x icon" style={{ padding: '10px 35px' }}></i>
      <InputComponent type="number" min="0" placeholder="Weight (Kg)" />

      <ButtonComponent
        text="Remove"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          onRemoveButtonClick(e);
        }}
      />
    </div>
  );
};

export default SetsDataComponent;
