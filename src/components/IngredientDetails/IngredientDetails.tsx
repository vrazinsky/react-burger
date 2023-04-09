import ingredientDetailsStyles from './IngredientDetails.module.css'
import { useState, useEffect, FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/hooks'
import { TIngredient } from '../../types/types'
import { getIngredients } from '../../store/store'

type TIngredientDetailsProps = {
    hideTitle: boolean
}

const IngredientDetails: FunctionComponent<TIngredientDetailsProps> = ({ hideTitle }) => {
    const [ingredient, setIngredient] = useState<TIngredient | null>(null)
    const ingredients = useAppSelector(getIngredients) as Array<TIngredient>;
    const { id } = useParams()

    useEffect(() => {
        if (ingredients && ingredients.length) {
            const _ingredient = ingredients.find(i => i._id === id)
            if (_ingredient) {
                setIngredient(_ingredient)
            }
        }
    }, [id, ingredients])
    return (
        ingredient &&
        (<div className='mt-20 ml-30 mr-30'>
            {!hideTitle && <div className={ingredientDetailsStyles.center + ' text text_type_main-large'}>
                Детали ингредиента
            </div>}
            <div>
                <img src={ingredient.image_large} alt={ingredient.name} />
            </div>
            <div className={ingredientDetailsStyles.center + ' text text_type_main-medium mt-4'}>
                {ingredient.name}
            </div>
            <div className={ingredientDetailsStyles.macronutrients + ' mt-8'}>
                <div className='mr-5'>
                    <div className={ingredientDetailsStyles.center + ' text text_type_main-default text_color_inactive'}>Калории, ккал</div>
                    <div className={ingredientDetailsStyles.center + ' text text_type_digits-default text_color_inactive'}>{ingredient.calories}</div>
                </div>
                <div className='mr-5'>
                    <div className={ingredientDetailsStyles.center + ' text text_type_main-default text_color_inactive'}>Белки, г</div>
                    <div className={ingredientDetailsStyles.center + ' text text_type_digits-default text_color_inactive'}>{ingredient.proteins}</div>
                </div>
                <div className='mr-5'>
                    <div className={ingredientDetailsStyles.center + ' text text_type_main-default text_color_inactive'}>Жиры, г</div>
                    <div className={ingredientDetailsStyles.center + ' text text_type_digits-default text_color_inactive'}>{ingredient.fat}</div>
                </div>
                <div>
                    <div className={ingredientDetailsStyles.center + ' text text_type_main-default text_color_inactive'}>Углеводы, г</div>
                    <div className={ingredientDetailsStyles.center + ' text text_type_digits-default text_color_inactive'}>{ingredient.carbohydrates}</div>
                </div>

            </div>
        </div>)
    )
}


export default IngredientDetails;