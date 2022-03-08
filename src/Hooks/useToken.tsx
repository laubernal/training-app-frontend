import { useState } from 'react';

export const useToken = () => {
  const getToken = (): any => {
    console.log('inside get token');
    const tokenString = localStorage.getItem('token');
    console.log('Token string', tokenString);

    if (tokenString) {
      const userToken = tokenString;
      return userToken;
    }
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: any): void => {
    localStorage.setItem('token', userToken);
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
};
