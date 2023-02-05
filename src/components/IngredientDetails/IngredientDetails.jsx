import ingredientDetailsStyles from './IngredientDetails.module.css'
import Modal from '../Modal/Modal'
import {  ingredientShape ,modalOptionsShape } from '../../utils/prop-types'

function IngredientDetails({modalOptions, ingredientDetails}) {  
    const {image_large, name, calories, proteins, fat, carbohydrates} = ingredientDetails; 
    return (
        <Modal modalOptions={modalOptions}>
        <div className='mb-15'>
            <div>
                <img src={image_large} alt={name}/>
            </div>
            <div className={ingredientDetailsStyles.center + ' text text_type_main-medium mt-4'}>
                {name}
            </div>
            <div className={ingredientDetailsStyles.macronutrients + ' mt-8'}>
                <div className='mr-5'>
                    <div className={ingredientDetailsStyles.center + ' text text_type_main-default text_color_inactive'}>Калории, ккал</div>
                    <div className={ingredientDetailsStyles.center + ' text text_type_digits-default text_color_inactive'}>{calories}</div>
                </div>
                <div className='mr-5'>
                    <div className={ingredientDetailsStyles.center + ' text text_type_main-default text_color_inactive'}>Белки, г</div>
                    <div className={ingredientDetailsStyles.center + ' text text_type_digits-default text_color_inactive'}>{proteins}</div>
                </div>
                <div className='mr-5'>
                    <div className={ingredientDetailsStyles.center + ' text text_type_main-default text_color_inactive'}>Жиры, г</div>
                    <div className={ingredientDetailsStyles.center + ' text text_type_digits-default text_color_inactive'}>{fat}</div>
                </div>
                <div>
                    <div className={ingredientDetailsStyles.center + ' text text_type_main-default text_color_inactive'}>Углеводы, г</div>
                    <div className={ingredientDetailsStyles.center + ' text text_type_digits-default text_color_inactive'}>{carbohydrates}</div>
                </div>

            </div>
        </div>
        </Modal>
    )
}

IngredientDetails.propTypes = {
    modalOptions: modalOptionsShape,    
    ingredientDetails: ingredientShape
}

export default IngredientDetails;