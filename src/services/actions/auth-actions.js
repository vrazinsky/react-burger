import {
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    PASSWORD_RESET,
    PASSWORD_RESET_FAILED,
    PASSWORD_RESET_SUCCESS,
    RESET_PASSWORD,
    RESET_PASSWORD_FAILED,
    RESET_PASSWORD_SUCCESS,
    GET_USER,
    GET_USER_FAILED,
    GET_USER_SUCCESS,
    PATCH_USER,
    PATCH_USER_FAILED,
    PATCH_USER_SUCCESS,
    LOGOUT,
    LOGOUT_FAILED,
    LOGOUT_SUCCESS,
    ADD_RETURN_URL
} from '../../utils/action-types'

export function register() {
    return {
        type: REGISTER
    }
}

export function registerSuccess(data) {
    return {
        type: REGISTER_SUCCESS,
        payload: data
    }
}

export function registerFailed() {
    return {
        type: REGISTER_FAILED
    }
}

export function login() {
    return {
        type: LOGIN
    }
}

export function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

export function loginFailed(data) {
    return {
        type: LOGIN_FAILED,
        payload: data
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}

export function logoutSuccess() {
    return {
        type: LOGOUT_SUCCESS,
    }
}

export function logoutFailed() {
    return {
        type: LOGOUT_FAILED
    }
}

export function passwordReset() {
    return {
        type: PASSWORD_RESET
    }
}

export function passwordResetSuccess() {
    return {
        type: PASSWORD_RESET_SUCCESS,
    }
}

export function passwordResetFailed() {
    return {
        type: PASSWORD_RESET_FAILED
    }
}

export function resetPassword() {
    return {
        type: RESET_PASSWORD
    }
}

export function resetPasswordSuccess() {
    return {
        type: RESET_PASSWORD_SUCCESS,
    }
}

export function resetPasswordFailed() {
    return {
        type: RESET_PASSWORD_FAILED
    }
}

export function getUser() {
    return {
        type: GET_USER
    }
}

export function getUserFailed() {
    return {
        type: GET_USER_FAILED
    }
}

export function getUserSuccess(data) {
    return {
        type: GET_USER_SUCCESS,
        payload: data
    }
}

export function patchUser() {
    return {
        type: PATCH_USER
    }
}

export function patchUserFailed() {
    return {
        type: PATCH_USER_FAILED
    }
}

export function patchUserSuccess(data) {
    return {
        type: PATCH_USER_SUCCESS,
        payload: data
    }
}

export function addReturnUrl(data) {
    return {
        type: ADD_RETURN_URL,
        payload: data
    }
}