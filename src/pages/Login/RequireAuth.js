import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    console.log('inside require auth', user);
    const location = useLocation()
    // to give time for check user in firebase 
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children
};

export default RequireAuth;

