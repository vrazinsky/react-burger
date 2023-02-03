import burgerConstructorStyles from './BurgerConstructor.module.css'
import { ConstructorElement, Button, DragIcon, CurrencyIcon  } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
function BurgerConstructor(props) {

    return (
        <div className='mt-25'>
            
                <div className={burgerConstructorStyles.list_item + ' pb-4 ml-4 mr-4'}>
                    <div style={{width: '536px'}}>
                        <ConstructorElement  
                        type={'top'}
                        isLocked={true}
                        text ={props.ingredients[0].name}
                        price={props.ingredients[0].price}
                        thumbnail={props.ingredients[0].image}/>
                    </div>
                </div>            
            <div className={burgerConstructorStyles.list_container}>
            {props.ingredients.slice(1, props.ingredients.length-2).map((item, index) => (
                <div className={burgerConstructorStyles.list_item + ' pb-4 ml-4 mr-4'}>
                    <div style={{width: '36px' }}>
                        <DragIcon />
                    </div>
                    <div style={{width: '536px'}}>
                        <ConstructorElement  
                        type={item.type}
                        isLocked={false}
                        text ={item.name}
                        price={item.price}
                        thumbnail={item.image}/>
                    </div>
                </div>
            ))}
            </div>
            <div className={burgerConstructorStyles.list_item + ' pb-4 ml-4 mr-4 mt-4'}>
                    <div style={{width: '536px'}}>
                        <ConstructorElement  
                        type={'bottom'}
                        isLocked={true}
                        text ={props.ingredients[props.ingredients.length-1].name}
                        price={props.ingredients[props.ingredients.length-1].price}
                        thumbnail={props.ingredients[props.ingredients.length-1].image}/>
                    </div>
                </div>     
            <div className={burgerConstructorStyles.total_price + ' mt-10 mr-6'}>
                <div className='text text_type_digits-medium'>
                        610
                </div>
                <div className='ml-1'>
                    <CurrencyIcon />
                </div>
                <div className='ml-10'>
                    <Button htmlType="button" type="primary" size="large">
                Оформить заказ
                    </Button>
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
  BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientShape)
}


export default BurgerConstructor;