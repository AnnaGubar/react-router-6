import { useAuth } from '../hook/useAuth';
import { useLocation, Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { user } = useAuth();

  // state={{from:location}} - что бы знать откуда мы пришли
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
