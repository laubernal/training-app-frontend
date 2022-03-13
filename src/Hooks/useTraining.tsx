import { useState } from 'react';
import { setRowType } from '../types';

export const useTraining = () => {
  const [training, setTraining] = useState({
    date: '',
    title: '',
    exercises: [{ category: '', exerciseName: '', sets: [{ set: '', reps: '', weight: '' }] }],
  });

  const addSet = (exerciseIndex: number) => {
    const newSet = { set: '', reps: '', weight: '' };

    const newSetList = [...training.exercises[exerciseIndex].sets, newSet];

    saveExercise(
      exerciseIndex,
      training.exercises[exerciseIndex].category,
      training.exercises[exerciseIndex].exerciseName,
      newSetList
    );
  };

  const saveSet = (exerciseIndex: number, set: string, reps: string, weight: string) => {
    const newSetList = [...training.exercises[exerciseIndex].sets];

    const newSet = {
      set,
      reps,
      weight,
    };

    newSetList.splice(exerciseIndex, 1, newSet);

    saveExercise(
      exerciseIndex,
      training.exercises[exerciseIndex].category,
      training.exercises[exerciseIndex].exerciseName,
      newSetList
    );
  };

  const removeSet = (setIndex: number) => {
    console.log('REMOVE SET CLIKED', setIndex);
  };

  const addExercise = () => {
    setTraining(prevState => {
      const newState = {
        ...prevState,
        exercises: [
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
    const newExerciseList = [...training.exercises];

    const newExercise = {
      category,
      exerciseName,
      sets,
    };

    newExerciseList.splice(index, 1, newExercise);

    setTraining(prevState => {
      const newState = {
        ...prevState,
        exercises: newExerciseList,
      };
      return newState;
    });
  };

  return {
    training,
    addExercise,
    saveExercise,
    addSet,
    saveSet,
    removeSet,
  };
};
