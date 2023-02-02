import burgerIngredientsStyles from './BurgerIngredients.module.css'
import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import PropTypes from 'prop-types';
function BurgerIngredients(props) {
    const [current, setCurrent] = useState('bun')
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
                {props.ingredients.filter(d => d.type === 'bun').map((item, index) => (
                    <div key={item._id} className={burgerIngredientsStyles.item + ' mt-6'}>
                        <img className={burgerIngredientsStyles.img} src={item.image} alt={item.name}></img>
                        <Counter count={1} size="default" extraClass="m-1"/>
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
                {props.ingredients.filter(d => d.type === 'sauce').map((item, index) => (
                    <div key={item._id} className={burgerIngredientsStyles.item + ' mt-6'}>
                        <img className={burgerIngredientsStyles.img} src={item.image} alt={item.name}></img>
                        <Counter count={1} size="default" extraClass="m-1"/>
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
                Начинки
            </div>
            <div className={burgerIngredientsStyles.list}>            
                {props.ingredients.filter(d => d.type === 'main').map((item, index) => (
                    <div key={item._id} className={burgerIngredientsStyles.item + ' mb-8'}>
                        <img className={burgerIngredientsStyles.img} src={item.image} alt={item.name}></img>
                        <Counter count={1} size="default" extraClass="m-1"/>
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

const ingredientShape = PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image:PropTypes.string,
    image_mobile:PropTypes.string,
    image_large:PropTypes.string,
    __v: PropTypes.number
  })
BurgerIngredients.propsType = {
  ingredients: PropTypes.arrayOf(ingredientShape)
}


export default BurgerIngredients;