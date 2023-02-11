import { useState, useEffect } from 'react';
import './App.css';
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import { getIngredients } from '../../utils/burger-api'
import { BurgerIngredientsContext } from '../../services/burger-ingredients-context'

function App() {  
  const [ingredients, setIngredients] = useState(null)
  
  useEffect(() => {
    getIngredients().then(result => {
      if(result.success) {
          setIngredients(result.data);
        }else {
          alert('Что-то пошло не так')
        }
    })       
  },[])
  

  return (
    <>
    <main className='main'>
      <AppHeader />
      <BurgerIngredientsContext.Provider value={{ingredients, setIngredients}}>
      <section className='section'>        
        <div className='wrapper'>
          <div>
          <div className='text text_type_main-large mt-10 mb-5'>
            Соберите Бургер
          </div>
            {ingredients && <BurgerIngredients />}
          </div>
          <div>
          {ingredients && <BurgerConstructor />}
          </div>
        </div>
      </section>  
      </BurgerIngredientsContext.Provider>   
      </main>
       <div id="modals">
       </div>
       </>
  );
}

export default App;
