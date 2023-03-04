import {
    register,
    registerFailed,
    registerSuccess,
    login,
    loginFailed,
    loginSuccess,
    resetPassword,
    resetPasswordFailed,
    resetPasswordSuccess,
    passwordReset,
    passwordResetFailed,
    passwordResetSuccess,
    getUser,
    getUserFailed,
    getUserSuccess,
    patchUser,
    patchUserFailed,
    patchUserSuccess,
    logout,
    logoutFailed,
    logoutSuccess
} from '../actions/auth-actions'
import { registerRequest, loginRequest, passwordResetRequest, resetPasswordRequest, getUserRequest, patchUserRequest, logoutRequest } from '../../utils/burger-api'
import { setItem } from '../../utils/localStorage'

export function registerThunk(data) {
    return function (dispatch) {
        dispatch(register())
        registerRequest(data)
            .then(res => {
                if (res) {
                    setItem('burgerAccessToken', res.accessToken)
                    setItem('burgerRefreshToken', res.refreshToken)
                    dispatch(registerSuccess(res))
                } else {
                    dispatch(registerFailed())
                }
            })
            .catch(err => {
                dispatch(registerFailed())
            })
    }
}

export function loginThunk(data) {
    return function (dispatch) {
        dispatch(login())
        loginRequest(data)
            .then(res => {
                console.log('res', res)
                if (res) {
                    setItem('burgerAccessToken', res.accessToken)
                    setItem('burgerRefreshToken', res.refreshToken)
                    dispatch(loginSuccess(res))
                } else {
                    dispatch(loginFailed())
                }
            })
            .catch(err => {
                alert(err)
                dispatch(loginFailed())
            })
    }
}

export function logoutThunk(data) {
    return function (dispatch) {
        dispatch(logout())
        logoutRequest(data)
            .then(res => {
                if (res) {
                    setItem('burgerAccessToken', '')
                    setItem('burgerRefreshToken', '')
                    dispatch(logoutSuccess())
                } else {
                    dispatch(logoutFailed())
                }
            })
            .catch(err => {
                dispatch(logoutFailed())
            })
    }
}

export function passwordResetThunk(data) {
    return function (dispatch) {
        dispatch(passwordReset())
        passwordResetRequest(data)
            .then(res => {
                if (res) {
                    dispatch(passwordResetSuccess(res))
                } else {
                    dispatch(passwordResetFailed())
                }
            })
            .catch(err => {
                dispatch(passwordResetFailed())
            })
    }
}

export function resetPasswordThunk(data) {
    return function (dispatch) {
        dispatch(resetPassword())
        resetPasswordRequest(data)
            .then(res => {
                if (res) {
                    dispatch(resetPasswordSuccess(res))
                } else {
                    dispatch(resetPasswordFailed())
                }
            })
            .catch(err => {
                alert(err)
                dispatch(resetPasswordFailed())
            })
    }
}

export function getUserThunk() {
    return function (dispatch) {
        dispatch(getUser())
        getUserRequest()
            .then(res => {
                if (res) {
                    dispatch(getUserSuccess(res.user))
                } else {
                    dispatch(getUserFailed())
                }
            })
            .catch(err => {
                dispatch(getUserFailed())
            })

    }
}

export function patchUserThunk(data) {
    return function (dispatch) {
        dispatch(patchUser())
        patchUserRequest(data)
            .then(res => {
                if (res) {
                    dispatch(patchUserSuccess(res))
                } else {
                    dispatch(patchUserFailed())
                }
            })
            .catch(err => {
                dispatch(patchUserFailed())
            })

    }
}