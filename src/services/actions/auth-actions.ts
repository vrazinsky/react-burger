import {
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    SEND_RESET_EMAIL,
    SEND_RESET_EMAIL_FAILED,
    SEND_RESET_EMAIL_SUCCESS,
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
import { TFetchResJson, TUserData } from '../../types/types'

export function register() {
    return {
        type: REGISTER
    }
}

export function registerSuccess(data: TFetchResJson) {
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

export function loginSuccess(data: TFetchResJson) {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

export function loginFailed() {
    return {
        type: LOGIN_FAILED
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

export function sendResetEmail() {
    return {
        type: SEND_RESET_EMAIL
    }
}

export function sendResetEmailSuccess() {
    return {
        type: SEND_RESET_EMAIL_SUCCESS,
    }
}

export function sendResetEmailFailed() {
    return {
        type: SEND_RESET_EMAIL_FAILED
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

export function getUserSuccess(data: TUserData | undefined) {
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

export function patchUserSuccess(data: TFetchResJson) {
    return {
        type: PATCH_USER_SUCCESS,
        payload: data
    }
}

export function addReturnUrl(data: string) {
    return {
        type: ADD_RETURN_URL,
        payload: data
    }
}