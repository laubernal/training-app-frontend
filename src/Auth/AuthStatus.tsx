import { useAuth } from './useAuth';

export const AuthStatus = () => {
  let auth = useAuth();

  if (!auth.user) {
    return <p>You are not logged in </p>;
  }

  return <p>YOU ARE LOGGED IN!</p>;
};
