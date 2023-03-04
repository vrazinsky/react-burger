import { Navigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addReturnUrl } from '../../services/actions/auth-actions'
import { useEffect } from 'react'

export default function ProtectedRouteElement({ element }) {
    const { user, getUser } = useSelector(store => store.authReducer);
    const location = useLocation();
    const dispatch = useDispatch();
    //need to be done only once
    useEffect(() => {
        dispatch(addReturnUrl(location.pathname))
    }, [])

    if (getUser) {
        return null;
    }

    return user ? element : <Navigate to="/login" replace />;
} 