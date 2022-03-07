import { useAuth } from './useAuth';

export const AuthStatus = () => {
  const auth = useAuth();

  if (!auth.token) {
    return <p>You are not logged in </p>;
  }

  return <p>YOU ARE LOGGED IN!</p>;
};
