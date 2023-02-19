import { request } from './request'

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