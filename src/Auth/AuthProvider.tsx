import axios from 'axios';
import React, { useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useToken } from '../Hooks/useToken';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const { token, setToken } = useToken();

  const signin = async (email: string, password: string, callback: VoidFunction): Promise<any> => {
    const response = await axios.post('/signin', { email, password });
    setToken(response.data.token);
    setUser(email);
    callback();
    return response;
  };

  //   let signup = async (
  //     firstName: string,
  //     lastName: string,
  //     email: string,
  //     password: string,
  //     passwordConfirmation: string,
  //     callback: VoidFunction
  //   ): Promise<any> => {
  //     const response = await axios.post('signup', {
  //       firstName,
  //       lastName,
  //       email,
  //       password,
  //       passwordConfirmation,
  //     });
  //     callback();
  //     return response;
  //   };

  const signout = async (callback: VoidFunction) => {
    await axios.get('/signout');
    setToken(null);
    setUser(null);
    callback();
    return;
  };

  const value = { user, signin, signout };
  //   let value = { user, signin, signup, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
