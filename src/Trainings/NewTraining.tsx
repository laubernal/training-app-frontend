import * as React from 'react';

import ButtonComponent from '../components/ButtonComponent';
import SectionTitle from '../components/SectionTitle';

const { useState } = React;

const NewTraining = (): JSX.Element => {
  const [addSet, setAddSet] = useState(false);

  const onAddSetClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    addSet ? setAddSet(false) : setAddSet(true);
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
      <div className="inline fields four wide" style={{ justifyContent: 'space-between' }}>
        <h4 className="ui field dividing header required">Sets</h4>
        <h4 className="ui field dividing header required">Reps</h4>
        <h4 className="ui field dividing header required">Weight (Kg)</h4>
      </div>
      <div className="inline four fields" style={{ justifyContent: 'space-between' }}>
        <input className="field" type="number" />
        <input className="field" type="number" />
        <label>X</label>
        <input className="field" type="number" />
      </div>
      {addSet ? (
        <div className="inline four fields" style={{ justifyContent: 'space-between' }}>
          <input className="field" type="number" />
          <input className="field" type="number" />
          <label>X</label>
          <input className="field" type="number" />
        </div>
      ) : null}
      <div className="inline fields" style={{ justifyContent: 'space-evenly' }}>
        <ButtonComponent
          text="Add set"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            setAddSet(true);
          }}
        />
        <ButtonComponent
          text="Submit exercise"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onAddSetClick(e)}
        />
      </div>
      <div className="inline fields" style={{ justifyContent: 'space-evenly' }}>
        <ButtonComponent
          text="Add exercise"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log('clicked')}
        />
        <ButtonComponent
          text="Submit training"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log('clicked')}
        />
      </div>
    </div>
  );
};

export default NewTraining;
