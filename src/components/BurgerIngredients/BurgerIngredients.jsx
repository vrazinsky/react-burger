import burgerIngredientsStyles from './BurgerIngredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState, useRef, useMemo, useEffect } from 'react'

import { useSelector } from 'react-redux';


import { useNavigate, useLocation } from 'react-router-dom'

import DraggableIngredient from '../DraggableIngredient/DraggableIngredient'


function BurgerIngredients() {
    const [current, setCurrent] = useState('bun')

    const { ingredients } = useSelector(store => store.ingredientsReducer)
    const countInfo = useSelector(store => store.ingredientCountersReducer)
    const navigate = useNavigate()
    const location = useLocation()

    const handleTabClick = (current) => {
        switch (current) {
            case 'bun':
                bunRef.current.scrollIntoView({ behavior: 'smooth' })
                break;
            case 'sauce':
                sauceRef.current.scrollIntoView({ behavior: 'smooth' })
                break;
            case 'main':
                mainRef.current.scrollIntoView({ behavior: 'smooth' })
                break;
            default:
                break;
        }
        setCurrent(current)
    }

    const { bunIngredients, sauceIngredients, mainIngredients } = useMemo(() => ({
        bunIngredients: ingredients.filter(d => d.type === 'bun'),
        sauceIngredients: ingredients.filter(d => d.type === 'sauce'),
        mainIngredients: ingredients.filter(d => d.type === 'main')
    }
    ), [ingredients]);

    const openIngredientModal = (ingredient) => {
        navigate(`/ingredients/${ingredient._id}`, { state: { background: location } })
    }

    const bunRef = useRef(null)
    const sauceRef = useRef(null)
    const mainRef = useRef(null)
    const tabRef = useRef(null)

    const parentRect = useRef(null);
    useEffect(() => {
        parentRect.current = tabRef.current.getBoundingClientRect()
    }, [])



    const handleScroll = () => {
        const bunDist = Math.abs(bunRef.current.getBoundingClientRect().top - parentRect.current.bottom);
        const sauceDist = Math.abs(sauceRef.current.getBoundingClientRect().top - parentRect.current.bottom);
        const mainDist = Math.abs(mainRef.current.getBoundingClientRect().top - parentRect.current.bottom);
        const minDist = Math.min(bunDist, sauceDist, mainDist)
        if (minDist === bunDist) {
            setCurrent('bun')
        }
        else if (minDist === sauceDist) {
            setCurrent('sauce')
        }
        else {
            setCurrent('main')
        }
    }

    return (
        <div>
            <div className={burgerIngredientsStyles.tab + ' mb-10'} ref={tabRef}>
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
            <div className={burgerIngredientsStyles.container} onScroll={handleScroll}>
                <div className='text text_type_main-large mb-6' ref={bunRef}>
                    Булки
                </div>
                <div className={burgerIngredientsStyles.list}>
                    {bunIngredients.map((item) => (
                        <DraggableIngredient ingredient={item} openIngredientModal={openIngredientModal} key={item._id} count={countInfo[item._id]} />
                    ))}
                </div>
                <div className='text text_type_main-large mt-10 mb-6' ref={sauceRef}>
                    Соусы
                </div>
                <div className={burgerIngredientsStyles.list}>
                    {sauceIngredients.map((item, index) => (
                        <DraggableIngredient ingredient={item} openIngredientModal={openIngredientModal} key={item._id} count={countInfo[item._id]} />
                    ))}
                </div>
                <div className='text text_type_main-large mt-10 mb-6' ref={mainRef}>
                    Начинки
                </div>
                <div className={burgerIngredientsStyles.list}>
                    {mainIngredients.map((item, index) => (
                        <DraggableIngredient ingredient={item} openIngredientModal={openIngredientModal} key={item._id} count={countInfo[item._id]} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BurgerIngredients;