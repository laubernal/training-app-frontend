import * as React from 'react';

import { Button, Input, SectionTitle } from '../components/index';
import { Exercise } from './Exercise';

export const NewTraining = (): JSX.Element => {
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
      {/* {addExerciseList.map((exercise: any, index: number) => {
        return (
          <div key={index}>
            <Exercise
              index={index}
              exercise={set}
              handleInputChange={handleInputExerciseChange}
            />
          </div>
        )
      })} */}
      <Button
        text="Submit training"
        type="button"
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          console.log('clicked submit training')
        }
      />
    </div>
  );
};
