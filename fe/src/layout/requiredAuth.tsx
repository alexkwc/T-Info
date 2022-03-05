/* eslint-disable react-hooks/rules-of-hooks */
import { Backdrop, CircularProgress } from '@mui/material';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useFirebaseContext } from '../provider/firebase';

function requireAuth() {
  const auth = useFirebaseContext();
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }
  if (error || !user) return <Navigate to="/login" state={{ from: location }} replace />;
  return <Outlet />;
}

export default requireAuth;
