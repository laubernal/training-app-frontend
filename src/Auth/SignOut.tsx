import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '../components';
import { useAuth } from './useAuth';

export const SignOut = (): JSX.Element => {
  let auth = useAuth();
  let navigate = useNavigate();
  return (
    <Button
      text="Sign out"
      type="button"
      onClick={() => {
        auth.signout(() => navigate('/'));
      }}
    />
  );
};
