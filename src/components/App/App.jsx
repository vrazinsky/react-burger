import { useEffect } from 'react';
import appStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'

import { useDispatch } from 'react-redux';
import { getIngredientsThunk } from '../../services/thunks/thunks'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getIngredientsThunk())
  }, [dispatch])


  return (
    <>
      <main>
        <AppHeader />
        <DndProvider backend={HTML5Backend}>
          <section className={appStyles.section}>
            <div className={appStyles.wrapper}>
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
        </DndProvider>
      </main>
      <div id="modals">
      </div>
    </>
  );
}

export default App;
