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

const authInitialState = {
    user: null,
    registerRequest: false,
    registerFailed: false,
    registerSuccess: false,
    loginRequest: false,
    loginFailed: false,
    loginSoccess: false,
    logoutRequest: false,
    logoutFailed: false,
    logoutSuccess: false,
    getUserRequest: false,
    getUserSuccess: false,
    getUserFailed: false,
    patchUserRequest: false,
    patchUserSuccess: false,
    patchUserFailed: false
}

const resetPasswordInitialState = {
    resetPassword: false,
    resetPasswordFailed: false,
    resetPasswordSuccess: false
}

const passwordResetInitialState = {
    passwordReset: false,
    passwordResetFailed: false,
    passwordResetSuccess: false
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

export const passwordResetReducer = (state = passwordResetInitialState, action) => {
    switch (action.type) {
        case PASSWORD_RESET_SUCCESS:
            return {
                passwordReset: false,
                passwordResetFailed: false,
                passwordResetSuccess: true
            }
        case PASSWORD_RESET:
            return {
                passwordReset: true,
                passwordResetFailed: false,
                passwordResetSuccess: false
            }
        case PASSWORD_RESET_FAILED:
            return {
                passwordReset: false,
                passwordResetFailed: true,
                passwordResetSuccess: false
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
                registerRequest: false,
                registerFailed: false
            }
        case REGISTER:
            return {
                ...state,
                registerSuccess: false,
                registerRequest: true,
                registerFailed: false
            }
        case REGISTER_FAILED:
            return {
                ...state,
                registerSuccess: false,
                registerRequest: false,
                registerFailed: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                loginSoccess: true,
                loginRequest: false,
                loginFailed: false
            }
        case LOGIN:
            return {
                ...state,
                loginSoccess: false,
                loginRequest: true,
                loginFailed: false
            }
        case LOGIN_FAILED:
            return {
                ...state,
                loginSoccess: false,
                loginRequest: false,
                loginFailed: true
            }
        case GET_USER:
            return {
                ...state,
                getUserRequest: true,
                getUserSuccess: false,
                getUserFailed: false
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

        case GET_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                getUserRequest: false,
                getUserSuccess: true,
                getUserFailed: false
            }
        case GET_USER_FAILED:
            return {
                ...state,
                getUserRequest: false,
                getUserSuccess: false,
                getUserFailed: true
            }
        case PATCH_USER:
            return {
                ...state,
                patchUserRequest: true,
                patchUserSuccess: false,
                patchUserFailed: false
            }
        case PATCH_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                patchUserRequest: false,
                patchUserSuccess: true,
                patchUserFailed: false
            }
        case PATCH_USER_FAILED:
            return {
                ...state,
                patchUserRequest: false,
                patchUserSuccess: false,
                patchUserFailed: true
            }
        default:
            return state
    }
}