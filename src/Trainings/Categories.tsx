import axios from 'axios';
import * as React from 'react';

export const Categories = (): JSX.Element => {
  //   const [category, setCategory] = React.useState('');

  const getCategories = async () => {
    await axios.get('http://localhost:5000/categories').then(response => {
      console.log(response.data);
    });
  };

  return (
    <div>
      <h1>Categories</h1>
      <button onClick={getCategories}>Get categories</button>
    </div>
  );
};
