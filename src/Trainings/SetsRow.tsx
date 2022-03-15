import React from 'react';

import { Button, Input } from '../components/index';
import { setRowType } from '../types';

type SetsRowProps = {
  index: number;
  set: setRowType;
  handleRemoveSetClick: (index: number) => void;
  handleInputChange: (event: any) => void;
};

export const SetsRow = ({
  index,
  set,
  handleRemoveSetClick,
  handleInputChange,
}: SetsRowProps): JSX.Element => {
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
        value={set.set}
        handleInputChange={handleInputChange}
        index={index}
      />
      <Input
        name="reps"
        type="number"
        min="1"
        placeholder="Reps"
        value={set.reps}
        handleInputChange={handleInputChange}
        index={index}
      />
      <i className="x icon" style={{ padding: '10px 35px' }}></i>
      <Input
        name="weight"
        type="number"
        min="0"
        placeholder="Weight (Kg)"
        value={set.weight}
        handleInputChange={handleInputChange}
        index={index}
      />
      <Button
        text="Remove"
        type="button"
        onClick={() => {
          handleRemoveSetClick(index);
        }}
      />
    </div>
  );
};
