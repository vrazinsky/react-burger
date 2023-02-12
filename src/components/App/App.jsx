import { useState, useEffect } from 'react';
import './App.css';
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import { getIngredients } from '../../utils/burger-api'
import { BurgerIngredientsContext } from '../../services/burger-ingredients-context'
import { useDispatch } from 'react-redux';
import { getIngredientsThunk } from '../../services/thunks/thunks'


function App() {      
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getIngredientsThunk())  
  },[dispatch])
  

  return (
    <>
    <main className='main'>
      <AppHeader />
      <section className='section'>
        <div className='wrapper'>
          <div>
          <div className='text text_type_main-large mt-10 mb-5'>
            Соберите Бургер
          </div>
            <BurgerIngredients />
          </div>
          <div>
          <BurgerConstructor />
          </div>
        </div>
      </section>
      </main>
       <div id="modals">
       </div>
       </>
  );
}

export default App;
