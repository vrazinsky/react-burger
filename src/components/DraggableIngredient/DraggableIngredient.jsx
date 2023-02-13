import draggableIngredientStyles from './DraggableIngredient.module.css'
import {Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDrag } from "react-dnd";

const DraggableIngredient = ({ingredient, openIngredientModal, count = 0}) => {
    const { name, image, price} = ingredient;
    const [, dragRef] = useDrag({
        type: "food",
        item: {ingredient},
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });
    return (
         <div className={draggableIngredientStyles.item + ' mt-6'} onClick={() => openIngredientModal(ingredient)} ref={dragRef}>
            <img className={draggableIngredientStyles.img} src={image} alt={name}></img>
            {count && <Counter count={count} size="default" extraClass="m-1"/>}
            <div className={ draggableIngredientStyles.price + ' text text_type_digits-default mt-1'}>
                {price}
                <div className='ml-1'>
                <CurrencyIcon />
                </div>
            </div>
            <div className='text text_type_main-default mt-1'>
                {name}
            </div>

        </div>
    )
}

export default DraggableIngredient;