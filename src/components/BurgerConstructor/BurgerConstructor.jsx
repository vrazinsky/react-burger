import { useState, useContext, useMemo } from 'react'
import burgerConstructorStyles from './BurgerConstructor.module.css'
import { ConstructorElement, Button, DragIcon, CurrencyIcon  } from '@ya.praktikum/react-developer-burger-ui-components'
import { getOrderDetails } from '../../utils/burger-api'
import {BurgerIngredientsContext } from '../../services/burger-ingredients-context'
import {OrderDetailsContext  } from '../../services/order-details-context'
import OrderDetails from '../OrderDetails/OrderDetails'

function BurgerConstructor() {
    const { ingredients } = useContext(BurgerIngredientsContext)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [orderId, setOrderId] = useState(null)
    
    const onModalClose = () =>{        
        setIsModalVisible(false)
    }
    const {bun, innerIngredients} = useMemo(() => ({
        bun: ingredients.find(ingredient => ingredient.type === 'bun'),
        innerIngredients: ingredients.filter(ingredient => ingredient.type !== 'bun').slice(0, 7)
     }), [ingredients]);

     const sum = useMemo(() => {
        return innerIngredients.reduce((prev, curr) =>prev + curr.price, bun?.price*2 || 0)
     },[bun, innerIngredients])

    const modalOptions = {isVisible: isModalVisible, onClose:onModalClose}

    const handleOrderClick = (e) => {
        const dataForOreder = [bun._id, ...innerIngredients.map(i => i._id), bun._id]
        getOrderDetails(dataForOreder).then(result => {
            e.stopPropagation()                
            if(result.success) {
                setOrderId(result.order.number);
                setIsModalVisible(true);
            } else {
                alert('Что-то пошло не так')
            }
        });        
    }
    
    return (
        <div className='mt-25'>
            
                <div className={burgerConstructorStyles.list_item + ' pb-4 ml-4 mr-4'}>
                {bun && <div style={{width: '536px'}}>
                        <ConstructorElement  
                        type={'top'}
                        isLocked={true}
                        text ={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image}/>
                    </div>}
                </div>            
            <div className={burgerConstructorStyles.list_container}>
            {innerIngredients.map((item, index) => (
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
            {bun && <div style={{width: '536px'}}>
                        <ConstructorElement  
                        type={'bottom'}
                        isLocked={true}
                        text ={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image}/>
                    </div>}
                </div>     
            <div className={burgerConstructorStyles.total_price + ' mt-10 mr-6'}>
                <div className='text text_type_digits-medium'>
                        {sum > 0 && sum}
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
            <OrderDetailsContext.Provider value={{orderId, setOrderId}}>
                {orderId && <OrderDetails modalOptions={modalOptions}/>}            
            </OrderDetailsContext.Provider>
        </div>
    )

}

export default BurgerConstructor;