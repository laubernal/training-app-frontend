import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './useAuth';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return children;
};
