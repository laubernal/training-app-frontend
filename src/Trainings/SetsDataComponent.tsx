import * as React from 'react';

import ButtonComponent from '../components/ButtonComponent';

const { useState } = React;

const SetsDataComponent = (): JSX.Element => {
  const [removeSet, setRemoveSet] = useState(null);

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
      }}
    >
      <input className="field" type="number" min="1" placeholder="Set" />
      <input className="field" type="number" />
      <i className="x icon" style={{ padding: '10px 35px' }}></i>
      <input className="field" type="number" />
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
