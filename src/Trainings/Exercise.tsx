import axios from 'axios';
import * as React from 'react';
import { useState, useEffect } from 'react';

import { Button, Dropdown, Input } from '../components/index';
import { useCategories } from '../Hooks/useCategories';
import { useTraining } from '../Hooks/useTraining';
import { setRowType } from '../types';
import { SetsRow } from './index';

type exerciseType = {
  category: string;
  name: string;
  sets: setRowType[];
};

type exerciseProps = {
  index: number;
  exercise: exerciseType[];
  handleInputChange: Function;
};

export const Exercise = ({ index, exercise, handleInputChange }: exerciseProps): JSX.Element => {
  const { training } = useTraining();
  
  const { categories, setCategories } = useCategories();
  const [categorySelected, setCategorySelected] = useState({
    label: 'Select a category',
    value: 'default',
  });

  const [addSetList, setAddSetList] = useState([{ set: '', reps: '', weight: '' }]);

  const [addExerciseList, setAddExerciseList] = useState([
    { category: '', exerciseName: '', sets: [addSetList] },
  ]);

  const handleAddSetClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    setAddSetList([...addSetList, { set: '', reps: '', weight: '' }]);
  };

  const handleRemoveSetClick = (index: number): void => {
    const set = [...addSetList];
    set.splice(index, 1);
    setAddSetList(set);
  };

  const handleInputSetChange = (event: any, index: number) => {
    const { name, value } = event.target;
    const sets: { [key: string]: string }[] = [...addSetList];
    sets[index][name] = value;
    setAddSetList(sets as setRowType[]);
  };

  const handleAddExerciseClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    setAddExerciseList([
      ...addExerciseList,
      { category: '', exerciseName: '', sets: [addSetList] },
    ]);
  };

  useEffect(() => {
    setCategories();
  }, []);

  return (
    <div className="ui form login">
      <div className="field required">
        <Dropdown
          options={categories}
          label="Select a category"
          selected={categorySelected}
          onSelectedChange={setCategorySelected}
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

      {addSetList.map((set: setRowType, index: number) => {
        return (
          <div key={index}>
            <SetsRow
              index={index}
              set={set}
              handleRemoveSetClick={handleRemoveSetClick}
              handleInputChange={handleInputSetChange}
            />
          </div>
        );
      })}

      <div className="inline fields" style={{ justifyContent: 'space-evenly' }}>
        <Button text="Add set" type="button" onClick={handleAddSetClick} />

        <Button text="Add exercise" type="button" onClick={handleAddExerciseClick} />
      </div>

      <div className="inline fields" style={{ justifyContent: 'space-evenly' }}>
        <Button
          text="Submit exercise"
          type="button"
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            console.log('clicked submit exercise')
          }
        />
      </div>
    </div>
  );
};
