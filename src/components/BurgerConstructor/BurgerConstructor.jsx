import { useState, useEffect } from 'react'
import burgerConstructorStyles from './BurgerConstructor.module.css'
import { ConstructorElement, Button, DragIcon, CurrencyIcon  } from '@ya.praktikum/react-developer-burger-ui-components'
import{ ingredientShape }from '../../utils/prop-types'
import PropTypes from 'prop-types';
import { getOrderDetails } from '../../utils/burger-api'

import OrderDetails from '../OrderDetails/OrderDetails'

function BurgerConstructor({ingredients}) {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [orderDetails, setOrderDetails] = useState(null)

    const onModalClose = () =>{
        setIsModalVisible(false)
    }

    useEffect(() => {
        setOrderDetails(getOrderDetails())
    },[])

    const modalOptions = {isVisible: isModalVisible, onClose:onModalClose}

    const handleOrderClick = (e) => {
        e.stopPropagation()        
        setIsModalVisible(true)
    }

    const activeIngredients = ingredients.slice(1, ingredients.length-2);
    return (
        <div className='mt-25'>
            
                <div className={burgerConstructorStyles.list_item + ' pb-4 ml-4 mr-4'}>
                    <div style={{width: '536px'}}>
                        <ConstructorElement  
                        type={'top'}
                        isLocked={true}
                        text ={ingredients[0].name}
                        price={ingredients[0].price}
                        thumbnail={ingredients[0].image}/>
                    </div>
                </div>            
            <div className={burgerConstructorStyles.list_container}>
            {activeIngredients.map((item, index) => (
                <div className={burgerConstructorStyles.list_item + ' pb-4 ml-4 mr-4'} key={item._id}>
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
                        text ={ingredients[ingredients.length-1].name}
                        price={ingredients[ingredients.length-1].price}
                        thumbnail={ingredients[ingredients.length-1].image}/>
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
                    <Button htmlType="button" type="primary" size="large" onClick={handleOrderClick}>
                Оформить заказ
                    </Button>
                </div>
            </div>
            {orderDetails && <OrderDetails modalOptions={modalOptions} {...orderDetails}/>}
        </div>
    )

}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientShape).isRequired
}


export default BurgerConstructor;