import { useState } from 'react';
import { exerciseType, setRowType } from '../types';

export const useTraining = () => {
  const [training, setTraining] = useState({
    date: '',
    title: '',
    exercises: [{ category: '', exerciseName: '', sets: [{ set: '', reps: '', weight: '' }] }],
  });

  const addExercise = () => {
    setTraining(prevState => {
      const newState = {
        ...prevState,
        exercices: [
          ...prevState.exercises,
          { category: '', exerciseName: '', sets: [{ set: '', reps: '', weight: '' }] },
        ],
      };
      return newState;
    });
  };

  const saveExercise = (
    index: number,
    category: string,
    exerciseName: string,
    sets: setRowType[]
  ): void => {
    // get the current state and find the exercice you are trying to save
    // remove it from the exercises array
    // create this new exercise
    // push it in the position that was occuping
  };

  return {
    training,
    addExercise,
  };
};
