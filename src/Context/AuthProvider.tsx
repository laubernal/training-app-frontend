import axios from 'axios';
import React from 'react';
import { AuthContext } from './AuthContext';
import { useToken } from '../Hooks/useToken';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { token, setToken } = useToken();

  const signin = async (email: string, password: string, callback: VoidFunction): Promise<void> => {
    const response = await axios.post('/signin', { email, password });
    console.log('RESPONSE', response);

    setToken(response.data.userJwt);

    callback();
  };

  const signup = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    passwordConfirmation: string,
    callback: VoidFunction
  ): Promise<any> => {
    const response = await axios.post('signup', {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation,
    });
    callback();
    return response;
  };

  const signout = async (callback: VoidFunction) => {
    try {
      await axios.get('/signout');
      setToken(null);
      callback();
      return;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ token, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
