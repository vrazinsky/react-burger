import burgerIngredientsStyles from './BurgerIngredients.module.css'
import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState, useRef, useMemo } from 'react'
import IngredientDetails from '../IngredientDetails/IngredientDetails'
import { useSelector } from 'react-redux';

function BurgerIngredients() {
    const [current, setCurrent] = useState('bun')
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [ingredientDetails, setIngredientDetails] = useState(null)
    const {ingredients, ingredientsFailed, ingredientsRequest} = useSelector(store => store.ingredientsReducer)
    console.log({ingredients, ingredientsFailed, ingredientsRequest})
    const handleTabClick = (current) => {
        switch(current) {
            case 'bun':
                bunRef.current.scrollIntoView({behavior: 'smooth'})
                break;
            case 'sauce':
                sauceRef.current.scrollIntoView({behavior: 'smooth'})
                break;
            case 'main':
                mainRef.current.scrollIntoView({behavior: 'smooth'})
                break;
            default:
                break;
        }
        setCurrent(current)
    }
    

    const {bunIngredients, sauceIngredients, mainIngredients} =  useMemo(() => ({
        bunIngredients: ingredients.filter(d => d.type === 'bun'),
        sauceIngredients: ingredients.filter(d => d.type === 'sauce'),
        mainIngredients: ingredients.filter(d => d.type === 'main')}
        ),[ingredients]);

    const onModalClose = () =>{
        setIsModalVisible(false)
    }

    const openIngredientModal = (ingredient) => {
        setIngredientDetails(ingredient)
        setIsModalVisible(true)
    }

    const bunRef = useRef(null)
    const sauceRef = useRef(null)
    const mainRef = useRef(null)
    
    const modalOptions = {isVisible: isModalVisible, onClose:onModalClose, title: 'Детали ингредиента'}


    return (        
        <div>       
        <div style={{ display: 'flex' }} className='mb-10'>
            <Tab value="bun" active={current === 'bun'} onClick={handleTabClick}>
                Булки
            </Tab>
            <Tab value="sauce" active={current === 'sauce'} onClick={handleTabClick}>
                Соусы
            </Tab>
            <Tab value="main" active={current === 'main'} onClick={handleTabClick}>
                Начинки
            </Tab>
        </div>
        <div className={burgerIngredientsStyles.container}>
            <div className='text text_type_main-large mb-6' ref={bunRef}>
                Булки
            </div>
            <div className={burgerIngredientsStyles.list}>            
                {bunIngredients.map((item, index) => (
                    <div key={item._id} className={burgerIngredientsStyles.item + ' mt-6'} onClick={() => openIngredientModal(item)}>
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
            <div className='text text_type_main-large mt-10 mb-6' ref={sauceRef}>
                Соусы
            </div>
            <div className={burgerIngredientsStyles.list}>            
                {sauceIngredients.map((item, index) => (
                    <div key={item._id} className={burgerIngredientsStyles.item + ' mt-6'} onClick={() => openIngredientModal(item)}>
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
            <div className='text text_type_main-large mt-10 mb-6' ref={mainRef}>
                Начинки
            </div>
            <div className={burgerIngredientsStyles.list}>            
                {mainIngredients.map((item, index) => (
                    <div key={item._id} className={burgerIngredientsStyles.item + ' mb-8'} onClick={() => openIngredientModal(item)}>
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
      {ingredientDetails && <IngredientDetails modalOptions={modalOptions} ingredientDetails={ingredientDetails} />}
      </div>
    )
}

export default BurgerIngredients;