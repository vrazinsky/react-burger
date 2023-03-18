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
    sendResetEmail,
    sendResetEmailFailed,
    sendResetEmailSuccess,
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
import { registerRequest, loginRequest, sendResetEmailRequest, resetPasswordRequest, getUserRequest, patchUserRequest, logoutRequest } from '../../utils/burger-api'
import { setItem } from '../../utils/localStorage'
import { Dispatch } from 'redux'
import { TUserData, TLoginData, TResetData, TPatchUserData } from '../../types/types'

export function registerThunk(userData: TUserData) {
    return function (dispatch: Dispatch) {
        dispatch(register())
        registerRequest(userData)
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

export function loginThunk(loginData: TLoginData) {
    return function (dispatch: Dispatch) {
        dispatch(login())
        loginRequest(loginData)
            .then(res => {
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

export function logoutThunk() {
    return function (dispatch: Dispatch) {
        dispatch(logout())
        logoutRequest()
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

export function sendResetEmailThunk({ email, callback }: { email: string, callback: Function }) {
    return function (dispatch: Dispatch) {
        dispatch(sendResetEmail())
        sendResetEmailRequest({ email })
            .then(res => {
                if (res) {
                    dispatch(sendResetEmailSuccess())
                    callback()
                } else {
                    dispatch(sendResetEmailFailed())
                }
            })
            .catch(err => {
                dispatch(sendResetEmailFailed())
            })
    }
}

export function resetPasswordThunk(data: TResetData) {
    return function (dispatch: Dispatch) {
        dispatch(resetPassword())
        resetPasswordRequest(data)
            .then(res => {
                if (res) {
                    alert('Пароль успешно восстановлен')
                    dispatch(resetPasswordSuccess())
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
    return function (dispatch: Dispatch) {
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

export function patchUserThunk(data: TPatchUserData) {
    return function (dispatch: Dispatch) {
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