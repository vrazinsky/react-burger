import ingredientDetailsStyles from './IngredientDetails.module.css'
import Modal from '../Modal/Modal'
import { modalOptionsShape } from '../../utils/prop-types'
import { useSelector } from 'react-redux'

function IngredientDetails({modalOptions}) {  
    const currentIngredient = useSelector(store => store.currentIngredientReducer.currentIngredient);     
    return (
        <>
        {currentIngredient && <Modal modalOptions={modalOptions}>
        <div className='mb-15'>
            <div>
                <img src={currentIngredient.image_large} alt={currentIngredient.name}/>
            </div>
            <div className={ingredientDetailsStyles.center + ' text text_type_main-medium mt-4'}>
                {currentIngredient.name}
            </div>
            <div className={ingredientDetailsStyles.macronutrients + ' mt-8'}>
                <div className='mr-5'>
                    <div className={ingredientDetailsStyles.center + ' text text_type_main-default text_color_inactive'}>Калории, ккал</div>
                    <div className={ingredientDetailsStyles.center + ' text text_type_digits-default text_color_inactive'}>{currentIngredient.calories}</div>
                </div>
                <div className='mr-5'>
                    <div className={ingredientDetailsStyles.center + ' text text_type_main-default text_color_inactive'}>Белки, г</div>
                    <div className={ingredientDetailsStyles.center + ' text text_type_digits-default text_color_inactive'}>{currentIngredient.proteins}</div>
                </div>
                <div className='mr-5'>
                    <div className={ingredientDetailsStyles.center + ' text text_type_main-default text_color_inactive'}>Жиры, г</div>
                    <div className={ingredientDetailsStyles.center + ' text text_type_digits-default text_color_inactive'}>{currentIngredient.fat}</div>
                </div>
                <div>
                    <div className={ingredientDetailsStyles.center + ' text text_type_main-default text_color_inactive'}>Углеводы, г</div>
                    <div className={ingredientDetailsStyles.center + ' text text_type_digits-default text_color_inactive'}>{currentIngredient.carbohydrates}</div>
                </div>

            </div>
        </div>
        </Modal>}
        </>
    )
}

IngredientDetails.propTypes = {
    modalOptions: modalOptionsShape.isRequired    
}

export default IngredientDetails;