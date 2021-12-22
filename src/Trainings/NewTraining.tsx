import * as React from 'react';

import ButtonComponent from '../components/ButtonComponent';
import InputComponent from '../components/InputComponent';
import SectionTitle from '../components/SectionTitle';
import SetsRow from './SetsRow';

const { useState } = React;

type setRowType = { set: string; reps: string; weight: string };

const setRow: setRowType = { set: '', reps: '', weight: '' };

const NewTraining = (): JSX.Element => {
  const [setList, setAddSet] = useState([setRow]);

  const handleAddSetClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    console.log('setList', ...setList);
    console.log('setRow', setRow);
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
            <InputComponent type="text" placeholder="Training title" />
          </div>
        </div>
        <div className="field required">
          <label>Date</label> <br />
          <div className="ui input">
            <InputComponent type="date" />
          </div>
        </div>
      </div>
      <br />
      <div className="field required">
        <label>Exercise name</label>
        <div className="ui input">
          <InputComponent type="text" placeholder="Exercise name" />
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
        <ButtonComponent text="Add set" onClick={handleAddSetClick} />

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
