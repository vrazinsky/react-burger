import { getItem, setItem } from './localStorage'
import { TFetchRes, TFetchResJson, TFetchOptions } from '../types/types'
export const BASE_URL = "https://norma.nomoreparties.space/api/";


const checkJwtExpired = (res: TFetchRes, endpoint: string, options: TFetchOptions | undefined, withAuth: boolean): TFetchRes | Promise<Response> => {
  if (!withAuth) {
    return res;
  }
  if (res.ok) {
    return res;
  }
  else if (res.status === 403) {
    return new Promise(function (resolve, reject) {
      res.json().then((res: TFetchResJson) => {
        if (res.message === 'jwt expired') {
          const tokenOptions: TFetchOptions = {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'Authorization': getItem('burgerAccessToken') },
            body: JSON.stringify({ token: getItem('burgerRefreshToken') })
          }
          request('auth/token', tokenOptions, false).then((res) => {
            if (res.success) {
              setItem('burgerAccessToken', res.accessToken)
              setItem('burgerRefreshToken', res.refreshToken)
              resolve(fetch(`${BASE_URL}${endpoint}`, {
                ...options, headers: { ...options?.headers, 'Authorization': getItem('burgerAccessToken') }
              }))
            } else {
              reject(Promise.reject(`Не удалось обновить токен: ${res}`));
            }
          })
        } else {
          reject(Promise.reject(`Не удалось обновить токен: ${res}`));
        }
      })
    })
  } else {
    return res;
  }
}

const checkResponse = (res: TFetchRes) => {
  return res?.json() || Promise.reject('Error');
};

const checkSuccess = (res: TFetchResJson) => {
  if (res && res.success) {
    return res;
  }
  return Promise.reject(`Error: ${res?.message}`);
};

export const request = (endpoint: string, options: TFetchOptions | undefined = undefined, withAuth: boolean = false) => {
  console.log(endpoint, options, withAuth)
  return fetch(`${BASE_URL}${endpoint}`, options)
    .then((res) => checkJwtExpired(res, endpoint, options, withAuth))
    .then(checkResponse)
    .then(checkSuccess);
};