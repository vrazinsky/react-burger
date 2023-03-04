import ingredientStyles from './ingredient.module.css'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function IngredientPage({ hideTitle }) {
    const [ingredient, setIngredient] = useState(null)
    const ingredients = useSelector(store => store.ingredientsReducer.ingredients);
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
        (<div className='mt-20'>
            {!hideTitle && <div className={ingredientStyles.center + ' text text_type_main-large'}>
                Детали ингредиента
            </div>}
            <div className={ingredientStyles.center}>
                <img src={ingredient.image_large} alt={ingredient.name} />
            </div>
            <div className={ingredientStyles.center + ' text text_type_main-medium mt-4'}>
                {ingredient.name}
            </div>
            <div className={ingredientStyles.macronutrients + ' mt-8'}>
                <div className='mr-5'>
                    <div className={ingredientStyles.center + ' text text_type_main-default text_color_inactive'}>Калории, ккал</div>
                    <div className={ingredientStyles.center + ' text text_type_digits-default text_color_inactive'}>{ingredient.calories}</div>
                </div>
                <div className='mr-5'>
                    <div className={ingredientStyles.center + ' text text_type_main-default text_color_inactive'}>Белки, г</div>
                    <div className={ingredientStyles.center + ' text text_type_digits-default text_color_inactive'}>{ingredient.proteins}</div>
                </div>
                <div className='mr-5'>
                    <div className={ingredientStyles.center + ' text text_type_main-default text_color_inactive'}>Жиры, г</div>
                    <div className={ingredientStyles.center + ' text text_type_digits-default text_color_inactive'}>{ingredient.fat}</div>
                </div>
                <div>
                    <div className={ingredientStyles.center + ' text text_type_main-default text_color_inactive'}>Углеводы, г</div>
                    <div className={ingredientStyles.center + ' text text_type_digits-default text_color_inactive'}>{ingredient.carbohydrates}</div>
                </div>

            </div>
        </div>)
    )
}

IngredientPage.propTypes = {
    hideTitle: PropTypes.bool
}

export { IngredientPage }