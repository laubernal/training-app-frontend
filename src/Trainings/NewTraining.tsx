import * as React from 'react';

import { Button, Dropdown, Input, SectionTitle } from '../components/index';
import { setRowType } from '../types';
import { SetsRow } from './index';

const { useState } = React;

const setRow: setRowType = { set: '', reps: '', weight: '' };

const options = [
  {
    label: 'Chest',
    value: 'chest',
  },
  {
    label: 'Back',
    value: 'back',
  },
  {
    label: 'Legs',
    value: 'legs',
  },
  {
    label: 'Arms',
    value: 'arms',
  },
  {
    label: 'Abs',
    value: 'abs',
  },
];

export const NewTraining = (): JSX.Element => {
  const [setList, setAddSet] = useState([setRow]);
  const [selected, setSelected] = useState({ label: 'Select a category', value: 'default' });

  const handleAddSetClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    setAddSet([...setList, setRow]);
  };

  const handleRemoveSetClick = (index: number): void => {
    const set = [...setList];
    set.splice(index, 1);
    setAddSet(set);
  };

  const handleInputChange = (e: any, index: number) => {
    const { name, value } = e.target;
    const sets: { [key: string]: string }[] = [...setList];
    sets[index][name] = value;
    setAddSet(sets as setRowType[]);
  };

  return (
    <div className="ui form login">
      <SectionTitle text="New training" /> <br />
      <div className="inline fields">
        <div className="field required">
          <label>Training title</label> <br />
          <div className="ui input">
            <Input type="text" placeholder="Training title" />
          </div>
        </div>
        <div className="field required">
          <label>Date</label> <br />
          <div className="ui input">
            <Input type="date" />
          </div>
        </div>
      </div>
      <br />
      <div className="field required">
        <Dropdown
          options={options}
          label="Select a category"
          selected={selected}
          onSelectedChange={setSelected}
        />
      </div>
      <div className="field required">
        <label>Exercise name</label>
        <div
          className="ui input inline"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}
        >
          <Input type="text" placeholder="Exercise name" />
        </div>
      </div>
      <div
        className="inline fields"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
      >
        <h4 className="ui field dividing header required">Sets</h4>
        <h4 className="ui field dividing header required">Reps</h4>
        <h4 className="ui field dividing header required">Weight (Kg)</h4>
      </div>
      {setList.map((set, index) => {
        return (
          <div key={index}>
            <SetsRow
              index={index}
              handleRemoveSetClick={handleRemoveSetClick}
              handleInputChange={handleInputChange}
            />
          </div>
        );
      })}
      <div className="inline fields" style={{ justifyContent: 'space-evenly' }}>
        <Button text="Add set" onClick={handleAddSetClick} />

        <Button
          text="Submit exercise"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            console.log('clicked submit exercise')
          }
        />
      </div>
      <div className="inline fields" style={{ justifyContent: 'space-evenly' }}>
        <Button
          text="Add exercise"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            console.log('clicked add exercise')
          }
        />

        <Button
          text="Submit training"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            console.log('clicked submit training')
          }
        />
      </div>
    </div>
  );
};
