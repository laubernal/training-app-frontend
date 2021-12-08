import * as React from 'react';
import SectionTitle from '../components/SectionTitle';

const NewTraining = (): JSX.Element => {
  return (
    <div className="ui form login">
      <SectionTitle text="New training" /> <br />
      <div className="inline fields">
        <div className="field">
          <label>Training title</label> <br />
          <div className="ui input">
            <input type="text" placeholder="Training title" />
          </div>
        </div>
        <div className="field">
          <label>Date</label> <br />
          <div className="ui input">
            <input type="date" />
          </div>
        </div>
      </div>
      <br />
      <div className="field">
        <label>Exercise name</label>
        <div className="ui input">
          <input type="text" placeholder="Exercise name" />
        </div>
      </div>
      <br />
      <div className="inline fields three wide">
        <h4 className="ui field dividing header">Sets</h4>
        <h4 className="ui field dividing header">Reps</h4>
        <h4 className="ui field dividing header">Weight (Kg)</h4>
      </div>
      <div className="inline three fields">
        <input type="number" />
        <input type="number" />
        <label>X</label>
        <input type="number" />
      </div>
    </div>
  );
};

export default NewTraining;
