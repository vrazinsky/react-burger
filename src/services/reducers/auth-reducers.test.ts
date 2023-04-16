import { authReducer, resetPasswordReducer, returnUrlReducer, sendResetEmailReducer } from './auth-reducers'
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

const authReducerInitialState = {
    user: null,
    register: false,
    registerFailed: false,
    registerSuccess: false,
    login: false,
    loginFailed: false,
    loginSuccess: false,
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

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(authReducer(undefined, undefined)).toEqual(
            authReducerInitialState
        )
    })

    it('should handle REGISTER_SUCCESS', () => {
        expect(
            authReducer(authReducerInitialState, {
                type: REGISTER_SUCCESS,
                payload: {
                    user: {
                        name: 'string',
                        email: 'string',
                        password: 'string'
                    }
                }
            })
        ).toEqual(
            {
                ...authReducerInitialState,
                user: {
                    name: 'string',
                    email: 'string',
                    password: 'string'
                },
                registerSuccess: true,
                register: false,
                registerFailed: false
            }
        )
    })

    it('should handle REGISTER', () => {
        expect(
            authReducer(authReducerInitialState, {
                type: REGISTER
            })
        ).toEqual(
            {
                ...authReducerInitialState,
                register: true,
                registerFailed: false,
                registerSuccess: false
            }
        )
    })

    it('should handle REGISTER_FAILED', () => {
        expect(
            authReducer(authReducerInitialState, {
                type: REGISTER_FAILED
            })
        ).toEqual(
            {
                ...authReducerInitialState,
                registerSuccess: false,
                register: false,
                registerFailed: true
            }
        )
    })

    it('should handle LOGIN_SUCCESS', () => {
        expect(
            authReducer(authReducerInitialState, {
                type: LOGIN_SUCCESS,
                payload: {
                    user: {
                        name: 'string',
                        email: 'string',
                        password: 'string'
                    }
                }
            })
        ).toEqual(
            {
                ...authReducerInitialState,
                user: {
                    name: 'string',
                    email: 'string',
                    password: 'string'
                },
                loginSuccess: true,
                login: false,
                loginFailed: false
            }
        )
    })

    it('should handle LOGIN', () => {
        expect(
            authReducer(authReducerInitialState, {
                type: LOGIN
            })
        ).toEqual(
            {
                ...authReducerInitialState,
                loginSuccess: false,
                login: true,
                loginFailed: false
            }
        )
    })

    it('should handle LOGIN_FAILED', () => {
        expect(
            authReducer(authReducerInitialState, {
                type: LOGIN_FAILED
            })
        ).toEqual(
            {
                ...authReducerInitialState,
                loginSuccess: false,
                login: false,
                loginFailed: true
            }
        )
    })

    it('should handle LOGOUT_SUCCESS', () => {
        expect(
            authReducer(authReducerInitialState, {
                type: LOGOUT_SUCCESS
            })
        ).toEqual(
            {
                ...authReducerInitialState,
                user: null,
                logout: false,
                logoutSuccess: true,
                logoutFailed: false
            }
        )
    })

    it('should handle LOGOUT', () => {
        expect(
            authReducer(authReducerInitialState, {
                type: LOGOUT
            })
        ).toEqual(
            {
                ...authReducerInitialState,
                logout: true,
                logoutSuccess: false,
                logoutFailed: false
            }
        )
    })

    it('should handle LOGOUT_FAILED', () => {
        expect(
            authReducer(authReducerInitialState, {
                type: LOGOUT_FAILED
            })
        ).toEqual(
            {
                ...authReducerInitialState,
                logout: false,
                logoutSuccess: false,
                logoutFailed: true
            }
        )
    })

    it('should handle GET_USER_SUCCESS', () => {
        expect(
            authReducer(authReducerInitialState, {
                type: GET_USER_SUCCESS,
                payload: {
                    name: 'string',
                    email: 'string',
                    password: 'string'
                }
            })
        ).toEqual(
            {
                ...authReducerInitialState,
                user: {
                    name: 'string',
                    email: 'string',
                    password: 'string'
                },
                getUser: false,
                getUserSuccess: true,
                getUserFailed: false
            }
        )
    })

    it('should handle GET_USER', () => {
        expect(
            authReducer(authReducerInitialState, {
                type: GET_USER
            })
        ).toEqual(
            {
                ...authReducerInitialState,
                getUser: true,
                getUserSuccess: false,
                getUserFailed: false
            }
        )
    })

    it('should handle GET_USER_FAILED', () => {
        expect(
            authReducer(authReducerInitialState, {
                type: GET_USER_FAILED
            })
        ).toEqual(
            {
                ...authReducerInitialState,
                getUser: false,
                getUserSuccess: false,
                getUserFailed: true
            }
        )
    })

    it('should handle PATCH_USER_SUCCESS', () => {
        expect(
            authReducer(authReducerInitialState, {
                type: PATCH_USER_SUCCESS,
                payload: {
                    user: {
                        name: 'string',
                        email: 'string',
                        password: 'string'
                    }
                }
            })
        ).toEqual(
            {
                ...authReducerInitialState,
                user: {
                    name: 'string',
                    email: 'string',
                    password: 'string'
                },
                patchUser: false,
                patchUserSuccess: true,
                patchUserFailed: false
            }
        )
    })

    it('should handle PATCH_USER', () => {
        expect(
            authReducer(authReducerInitialState, {
                type: PATCH_USER
            })
        ).toEqual(
            {
                ...authReducerInitialState,
                patchUser: true,
                patchUserSuccess: false,
                patchUserFailed: false
            }
        )
    })

    it('should handle PATCH_USER_FAILED', () => {
        expect(
            authReducer(authReducerInitialState, {
                type: PATCH_USER_FAILED
            })
        ).toEqual(
            {
                ...authReducerInitialState,
                patchUser: false,
                patchUserSuccess: false,
                patchUserFailed: true
            }
        )
    })

})