import axios from 'axios';
import { useState } from 'react';

type categoriesType = { _id: string; _categoryName: string };

export const useCategories = () => {
  const [categories, setCategories] = useState([{ label: '', value: '' }]);

  const getCategories = async (): Promise<void> => {
    try {
      const response = await axios.get('/categories');

      setCategories(
        response.data.map(({ _id, _categoryName }: categoriesType) => ({
          label: _categoryName,
          value: _id,
        }))
      );
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return {
    categories,
    setCategories: getCategories,
  };
};
