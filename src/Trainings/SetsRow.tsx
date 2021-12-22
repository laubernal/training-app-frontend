import * as React from 'react';

import ButtonComponent from '../components/ButtonComponent';
import InputComponent from '../components/InputComponent';

const SetsRow = ({ row, index, handleRemoveSetClick, handleInputChange }: any): JSX.Element => {
  return (
    <div
      className="inline"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 0.5fr)',
        gap: '0px 10px',
        paddingBottom: '10px',
      }}
    >
      <InputComponent
        name="set"
        type="number"
        min="1"
        placeholder="Set"
        handleInputChange={handleInputChange}
        index={index}
      />
      <InputComponent
        name="reps"
        type="number"
        min="1"
        placeholder="Reps"
        handleInputChange={handleInputChange}
        index={index}
      />
      <i className="x icon" style={{ padding: '10px 35px' }}></i>
      <InputComponent
        name="weight"
        type="number"
        min="0"
        placeholder="Weight (Kg)"
        handleInputChange={handleInputChange}
        index={index}
      />

      <ButtonComponent
        text="Remove"
        onClick={() => {
          handleRemoveSetClick(index);
        }}
      />
    </div>
  );
};

export default SetsRow;
