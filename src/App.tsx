import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader'
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients'
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor'
import data from '../src/utils/data'

function App() {
  const [ingredients, setIngredients] = useState(data)
  return (
    <main className='main'>      
      <AppHeader />
      <section className='section'>
        <div className='wrapper'>
          <div>
          <div className='text text_type_main-large mt-10 mb-5'>
            СОБЕРИТЕ БУРГЕР
          </div>
            <BurgerIngredients ingredients={ingredients} />
          </div>
          <div>
          <BurgerConstructor ingredients={ingredients} />
          </div>
        </div>
      </section>
      </main>
  );
}

export default App;
