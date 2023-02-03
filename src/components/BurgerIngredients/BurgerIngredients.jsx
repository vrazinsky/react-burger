import burgerIngredientsStyles from './BurgerIngredients.module.css'
import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import PropTypes from 'prop-types';
import ingredientShape from '../../utils/prop-types'

function BurgerIngredients({ingredients}) {
    const [current, setCurrent] = useState('bun')
    const bunIngredients = ingredients.filter(d => d.type === 'bun')
    const sauceIngredients = ingredients.filter(d => d.type === 'sauce');
    const mainIngredients =  ingredients.filter(d => d.type === 'main')

    return (        
        <div>       
        <div style={{ display: 'flex' }} className='mb-10'>
            <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
        <div className={burgerIngredientsStyles.container}>
            <div className='text text_type_main-large mb-6'>
                Булки
            </div>
            <div className={burgerIngredientsStyles.list}>            
                {bunIngredients.map((item, index) => (
                    <div key={item._id} className={burgerIngredientsStyles.item + ' mt-6'}>
                        <img className={burgerIngredientsStyles.img} src={item.image} alt={item.name}></img>
                        {index === 0 ? <Counter count={1} size="default" extraClass="m-1"/> : null}
                        <div className={ burgerIngredientsStyles.price + ' text text_type_digits-default mt-1'}>
                            {item.price}
                            <div className='ml-1'>
                            <CurrencyIcon />
                            </div>
                        </div>
                        <div className='text text_type_main-default mt-1'>
                            {item.name}
                        </div>

                    </div>
                ))}
            </div>
            <div className='text text_type_main-large mt-10 mb-6'>
                Соусы
            </div>
            <div className={burgerIngredientsStyles.list}>            
                {sauceIngredients.map((item, index) => (
                    <div key={item._id} className={burgerIngredientsStyles.item + ' mt-6'}>
                        <img className={burgerIngredientsStyles.img} src={item.image} alt={item.name}></img>
                        {index === 2 ? <Counter count={1} size="default" extraClass="m-1"/> : null}
                        <div className={ burgerIngredientsStyles.price + ' text text_type_digits-default mt-1'}>
                            {item.price}
                            <div className='ml-1'>
                            <CurrencyIcon />
                            </div>
                        </div>
                        <div className={burgerIngredientsStyles.center + ' text text_type_main-default mt-1'}>
                            {item.name}
                        </div>

                    </div>
                ))}
            </div>
            <div className='text text_type_main-large mt-10 mb-6'>
                Начинки
            </div>
            <div className={burgerIngredientsStyles.list}>            
                {mainIngredients.map((item, index) => (
                    <div key={item._id} className={burgerIngredientsStyles.item + ' mb-8'}>
                        <img className={burgerIngredientsStyles.img} src={item.image} alt={item.name}></img>
                        <div className={ burgerIngredientsStyles.price + ' text text_type_digits-default mt-1'}>
                            {item.price}
                            <div className='ml-1'>
                            <CurrencyIcon />
                            </div>
                        </div>
                        <div className='text text_type_main-default mt-1'>
                            {item.name}
                        </div>

                    </div>
                ))}
            </div>
        </div>
      
      </div>
    )
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientShape).isRequired
}


export default BurgerIngredients;