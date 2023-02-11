const NORMA_API = 'https://norma.nomoreparties.space/api'

function getIngredients() {
    return fetch(`${NORMA_API}/ingredients`)
    .then(res => checkResponse(res))      
    .catch(e => alert('Сервер временно недоступен.'));
 }

 function getOrderDetails(ids) {
    const body = {'ingredients': ids}
    return fetch(`${NORMA_API}/orders`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).then(res => checkResponse(res))
    .catch(e => alert('Сервер временно недоступен.'));    
 }

 const checkResponse = res => {
  return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
};

 export { getIngredients, getOrderDetails }