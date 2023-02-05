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

 function getOrderDetails() {
    return {
        id: '034536',
        state: 'Ваш заказ начали готовить',
        description: 'Дождитесь готовности на орбитальной станции'
    }
 }

 export { getIngredients, getOrderDetails }