import { request } from './request'
import { getItem } from './localStorage'

export const getIngredientsRequest = () => request("ingredients");

export const getOrderDetailsRequest = (ids) => {
  const body = { 'ingredients': ids };
  const options = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }
  return request('orders', options)
}

export const registerRequest = (data) => {
  const options = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }
  return request('auth/register', options)
}

export const loginRequest = (data) => {
  const options = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
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

export const sendResetEmailRequest = (data) => {
  const options = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }
  return request('password-reset', options)
}

export const resetPasswordRequest = (data) => {
  const options = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
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

export const patchUserRequest = (data) => {
  const options = {
    method: 'PATCH',
    headers: { 'Content-type': 'application/json; charset=UTF-8', 'Authorization': getItem('burgerAccessToken') },
    body: JSON.stringify(data)
  }
  return request('auth/user', options, true)
}

