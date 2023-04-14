import { Navigate, useLocation } from 'react-router-dom'
import { addReturnUrl } from '../../services/actions/auth-actions'
import { useEffect, useState, FunctionComponent } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { getAuth } from '../../store/store'

type TProtectedRouteElement = {
    element: JSX.Element;
}
const ProtectedRouteElement: FunctionComponent<TProtectedRouteElement> = ({ element }) => {
    const { user, getUser } = useAppSelector(getAuth);
    const [userNotLoaded, setUserNotLoaded] = useState(true)
    const location = useLocation();
    const dispatch = useAppDispatch();

    //need to be done only once
    useEffect(() => {
        dispatch(addReturnUrl(location.pathname))
        setUserNotLoaded(false)
    }, [])

    if (userNotLoaded || getUser) {
        return null;
    } else {
        return user ? element : <Navigate to="/login" replace />;
    }
}

export default ProtectedRouteElement