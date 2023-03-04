import { Navigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addReturnUrl } from '../../services/actions/auth-actions'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function ProtectedRouteElement({ element }) {
    const { user, getUser } = useSelector(store => store.authReducer);
    const [userNotLoaded, setUserNotLoaded] = useState(true)
    const location = useLocation();
    const dispatch = useDispatch();

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

ProtectedRouteElement.propTypes = {
    element: PropTypes.element.isRequired
}

export default ProtectedRouteElement