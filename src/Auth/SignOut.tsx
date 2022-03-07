import { useNavigate } from 'react-router-dom';
import { Button } from '../components';
import { useAuth } from './useAuth';

export const SignOut = (): JSX.Element => {
  const auth = useAuth();
  const navigate = useNavigate();
  
  return (
    <Button
      text="Sign out"
      type="button"
      onClick={() => {
        auth.signout(() => navigate('/', { replace: true }));
      }}
    />
  );
};
