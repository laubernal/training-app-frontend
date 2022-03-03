import axios from 'axios';
import React, { useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  let [user, setUser] = useState<any>(null);

  let signin = async (email: string, password: string, callback: VoidFunction): Promise<any> => {
    const response = await axios.post('/signin', { email, password });
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

  let signout = async (callback: VoidFunction) => {
    await axios.get('/signout');
    setUser(null);
    callback();
    return;
  };

  let value = { user, signin, signout };
  //   let value = { user, signin, signup, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
