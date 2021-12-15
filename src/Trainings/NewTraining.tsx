import * as React from 'react';

import ButtonComponent from '../components/ButtonComponent';
import SectionTitle from '../components/SectionTitle';
import SetsDataComponent from './SetsDataComponent';

const { useState } = React;

const NewTraining = (): JSX.Element => {
  const [addSet, setAddSet] = useState([SetsDataComponent]);

  const onAddSetClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    setAddSet([...addSet, SetsDataComponent]);
  };

  return (
    <div className="ui form login">
      <SectionTitle text="New training" /> <br />
      <div className="inline fields">
        <div className="field required">
          <label>Training title</label> <br />
          <div className="ui input">
            <input type="text" placeholder="Training title" />
          </div>
        </div>
        <div className="field required">
          <label>Date</label> <br />
          <div className="ui input">
            <input type="date" />
          </div>
        </div>
      </div>
      <br />
      <div className="field required">
        <label>Exercise name</label>
        <div className="ui input">
          <input type="text" placeholder="Exercise name" />
        </div>
      </div>
      <br />
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
      {addSet.map(set => (
        <SetsDataComponent />
      ))}
      <div className="inline fields" style={{ justifyContent: 'space-evenly' }}>
        <ButtonComponent text="Add set" onClick={onAddSetClick} />

        <ButtonComponent
          text="Submit exercise"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            console.log('clicked submit exercise')
          }
        />
      </div>
      <div className="inline fields" style={{ justifyContent: 'space-evenly' }}>
        <ButtonComponent
          text="Add exercise"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            console.log('clicked add exercise')
          }
        />

        <ButtonComponent
          text="Submit training"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            console.log('clicked submit training')
          }
        />
      </div>
    </div>
  );
};

export default NewTraining;
