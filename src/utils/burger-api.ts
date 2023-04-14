import { request } from './request'
import { getItem } from './localStorage'
import { TUserData, TLoginData, TResetEmailData, TResetData, TPatchUserData } from '../types/types'

export const getIngredientsRequest = () => request("ingredients");

export const getOrderDetailsRequest = (ids: Array<string>) => {
  const body = { 'ingredients': ids };
  const options = {
    method: 'post',
    headers: { 'Content-Type': 'application/json', 'Authorization': getItem('burgerAccessToken') },
    body: JSON.stringify(body)
  }
  return request('orders', options, true)
}

export const registerRequest = (userData: TUserData) => {
  const options = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  }
  return request('auth/register', options)
}

export const loginRequest = (loginData: TLoginData) => {
  const options = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginData)
  }
  return request('auth/login', options)
}

export const logoutRequest = () => {
  const options = {
    method: 'post',
    headers: { 'Content-Type': 'application/json', 'Authorization': getItem('burgerAccessToken') },
    body: JSON.stringify({ token: getItem('burgerRefreshToken') })
  }
  return request('auth/logout', options)
}

export const sendResetEmailRequest = (resetEmailData: TResetEmailData) => {
  const options = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(resetEmailData)
  }
  return request('password-reset', options)
}

export const resetPasswordRequest = (resetData: TResetData) => {
  const options = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(resetData)
  }
  return request('password-reset/reset', options)
}

export const getUserRequest = () => {
  const options = {
    method: 'get',
    headers: { 'Content-Type': 'application/json', 'Authorization': getItem('burgerAccessToken') }
  }
  return request('auth/user', options, true)
}

export const patchUserRequest = (patchUserData: TPatchUserData) => {
  const options = {
    method: 'PATCH',
    headers: { 'Content-type': 'application/json; charset=UTF-8', 'Authorization': getItem('burgerAccessToken') },
    body: JSON.stringify(patchUserData)
  }
  return request('auth/user', options, true)
}

