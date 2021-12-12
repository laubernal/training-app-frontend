import * as React from 'react';
import ButtonComponent from '../components/ButtonComponent';
import SectionTitle from '../components/SectionTitle';

const NewTraining = (): JSX.Element => {
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
      <div className="inline fields" style={{ justifyContent: 'space-evenly' }}>
        <ButtonComponent text="Add set"/>
        <ButtonComponent text="Submit exercise" />
      </div>
      <div className="inline fields" style={{ justifyContent: 'space-evenly' }}>
        <ButtonComponent text="Add exercise" />
        <ButtonComponent text="Submit training" />
      </div>
    </div>
  );
};

export default NewTraining;
