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

const authInitialState = {
    user: null,
    register: false,
    registerFailed: false,
    registerSuccess: false,
    login: false,
    loginFailed: false,
    loginSoccess: false,
    logout: false,
    logoutFailed: false,
    logoutSuccess: false,
    getUser: false,
    getUserSuccess: false,
    getUserFailed: false,
    patchUser: false,
    patchUserSuccess: false,
    patchUserFailed: false
}

const resetPasswordInitialState = {
    resetPassword: false,
    resetPasswordFailed: false,
    resetPasswordSuccess: false
}

const sendResetEmailInitialState = {
    sendResetEmail: false,
    sendResetEmailFailed: false,
    sendResetEmailSuccess: false
}

const returnUrlInitialState = {
    url: ''
}

export const returnUrlReducer = (state = returnUrlInitialState, action) => {
    switch (action.type) {
        case ADD_RETURN_URL:
            return {
                url: action.payload
            }
        default:
            return state
    }
}

export const sendResetEmailReducer = (state = sendResetEmailInitialState, action) => {
    switch (action.type) {
        case SEND_RESET_EMAIL_SUCCESS:
            return {
                sendResetEmail: false,
                sendResetEmailFailed: false,
                sendResetEmailSuccess: true
            }
        case SEND_RESET_EMAIL:
            return {
                sendResetEmail: true,
                sendResetEmailFailed: false,
                sendResetEmailSuccess: false
            }
        case SEND_RESET_EMAIL_FAILED:
            return {
                sendResetEmail: false,
                sendResetEmailtFailed: true,
                sendResetEmailSuccess: false
            }
        default:
            return state
    }
}

export const resetPasswordReducer = (state = resetPasswordInitialState, action) => {
    switch (action.type) {
        case RESET_PASSWORD_SUCCESS:
            return {
                resetPassword: false,
                resetPasswordFailed: false,
                resetPasswordSuccess: true
            }
        case RESET_PASSWORD:
            return {
                resetPassword: true,
                resetPasswordFailed: false,
                resetPasswordSuccess: false
            }
        case RESET_PASSWORD_FAILED:
            return {
                resetPassword: false,
                resetPasswordFailed: true,
                resetPasswordSuccess: false
            }
        default:
            return state
    }
}

export const authReducer = (state = authInitialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                registerSuccess: true,
                register: false,
                registerFailed: false
            }
        case REGISTER:
            return {
                ...state,
                registerSuccess: false,
                register: true,
                registerFailed: false
            }
        case REGISTER_FAILED:
            return {
                ...state,
                registerSuccess: false,
                register: false,
                registerFailed: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                loginSoccess: true,
                login: false,
                loginFailed: false
            }
        case LOGIN:
            return {
                ...state,
                loginSoccess: false,
                login: true,
                loginFailed: false
            }
        case LOGIN_FAILED:
            return {
                ...state,
                loginSoccess: false,
                login: false,
                loginFailed: true
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                user: null,
                logout: false,
                logoutSuccess: true,
                logoutFailed: false
            }
        case LOGOUT:
            return {
                ...state,
                logout: true,
                logoutSuccess: false,
                logoutFailed: false
            }
        case LOGOUT_FAILED:
            return {
                ...state,
                logout: false,
                logoutSuccess: false,
                logoutFailed: true
            }
        case GET_USER:
            return {
                ...state,
                getUser: true,
                getUserSuccess: false,
                getUserFailed: false
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                getUser: false,
                getUserSuccess: true,
                getUserFailed: false
            }
        case GET_USER_FAILED:
            return {
                ...state,
                getUser: false,
                getUserSuccess: false,
                getUserFailed: true
            }
        case PATCH_USER:
            return {
                ...state,
                patchUser: true,
                patchUserSuccess: false,
                patchUserFailed: false
            }
        case PATCH_USER_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                patchUser: false,
                patchUserSuccess: true,
                patchUserFailed: false
            }
        case PATCH_USER_FAILED:
            return {
                ...state,
                patchUser: false,
                patchUserSuccess: false,
                patchUserFailed: true
            }
        default:
            return state
    }
}