import * as React from 'react';

import Button from '../components/Button';
import Input from '../components/Input';

type SetsRowProps = {
  index: number;
  handleRemoveSetClick: Function;
  handleInputChange: Function;
};

const SetsRow = ({ index, handleRemoveSetClick, handleInputChange }: SetsRowProps): JSX.Element => {
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
      <Input
        name="set"
        type="number"
        min="1"
        placeholder="Set"
        handleInputChange={handleInputChange}
        index={index}
      />
      <Input
        name="reps"
        type="number"
        min="1"
        placeholder="Reps"
        handleInputChange={handleInputChange}
        index={index}
      />
      <i className="x icon" style={{ padding: '10px 35px' }}></i>
      <Input
        name="weight"
        type="number"
        min="0"
        placeholder="Weight (Kg)"
        handleInputChange={handleInputChange}
        index={index}
      />

      <Button
        text="Remove"
        onClick={() => {
          handleRemoveSetClick(index);
        }}
      />
    </div>
  );
};

export default SetsRow;
