
import homeStyles from './home.module.css';
import BurgerIngredients from '../components/BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../components/BurgerConstructor/BurgerConstructor'
import { Outlet } from 'react-router-dom'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export function HomePage() {

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={homeStyles.wrapper}>
        <div>
          <div className='text text_type_main-large mt-10 mb-5'>
            Соберите Бургер
          </div>
          <BurgerIngredients />
        </div>
        <div>
          <BurgerConstructor />
        </div>
        <Outlet />
      </div>
    </DndProvider>
  )
}