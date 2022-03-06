import * as React from 'react';

type signInUserType = { email: string; password: string };

interface AuthContextType {
  user: signInUserType;
  signin: (email: string, password: string, callback: VoidFunction) => any;
  // signup = (
  //     firstName: string,
  //     lastName: string,
  //     email: string,
  //     password: string,
  //     passwordConfirmation: string,
  //     callback: VoidFunction
  //   ): any;
  signout: (callback: VoidFunction) => void;
}

export let AuthContext = React.createContext<AuthContextType>(null!);
