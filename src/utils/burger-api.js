const NORMA_API = 'https://norma.nomoreparties.space/api'

function getIngredients() {
    return fetch(`${NORMA_API}/ingredients`)
    .then(res => res.json())
      .then(
        (result) => {
         return result;
        })
        .catch(e => alert('Сервер временно недоступен.'));
 }

 function getOrderDetails(ids) {
    const body = {'ingredients': ids}
    return fetch(`${NORMA_API}/orders`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).then(res => res.json())
    .then(
      (result) => {
       return result;
      })
      .catch(e => alert('Сервер временно недоступен.'));    
 }

 export { getIngredients, getOrderDetails }