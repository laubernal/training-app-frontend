import React, { useEffect } from 'react';

import { Button, Input, SectionTitle } from '../components/index';
import { useCategories } from '../Hooks/useCategories';
import { useTraining } from '../Hooks/useTraining';
import { Exercise } from './Exercise';

export const NewTraining = (): JSX.Element => {
  const { training, addExercise, removeSet, addSet, saveSet } = useTraining();
  const { categories, setCategories } = useCategories();

  useEffect(() => {
    setCategories();
  }, []);

  return (
    <form className="ui form login">
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
      {training.exercises.map((exercise: any, index: number) => {
        return (
          <div key={index}>
            <Exercise
              exerciseIndex={index}
              exercise={exercise}
              categories={categories}
              addSet={addSet}
              saveSet={saveSet}
              removeSet={removeSet}
            />
          </div>
        );
      })}
      <div className="inline fields" style={{ justifyContent: 'space-evenly' }}>
        <Button text="Add exercise" type="button" onClick={addExercise} />
        <Button
          text="Submit training"
          type="submit"
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            console.log('clicked submit training')
          }
        />
      </div>
    </form>
  );
};
