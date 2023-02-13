import { useState, useMemo } from 'react'
import burgerConstructorStyles from './BurgerConstructor.module.css'
import { ConstructorElement, Button, DragIcon, CurrencyIcon  } from '@ya.praktikum/react-developer-burger-ui-components'
import OrderDetails from '../OrderDetails/OrderDetails'
import { useSelector, useDispatch } from 'react-redux';
import { getOrderDetailsThunk } from '../../services/thunks/thunks'
import { useDrop } from 'react-dnd'
import { addBunToCunstructor, addInnerIngredientToConstructor, removeOrderDetails, changeInnerIngredients } from '../../services/actions/actions'

function BurgerConstructor() {
    const { bun, innerIngredients } = useSelector(store => store.constructorItemsReducer.constructorIngredients)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const {orderDetails} = useSelector(store => store.orderDetailsReducer)
    const dispatch = useDispatch()

    const onDrop = (data) => {        
        if (data.ingredient.type === 'bun') {
            dispatch(addBunToCunstructor(data.ingredient))
        } else {
            if (bun) {
                dispatch(addInnerIngredientToConstructor(data.ingredient))
            }
        }
    }

    const [, dropTarget] = useDrop({
        accept: "food",
        drop(itemId) {
            onDrop(itemId)
        },
    });

    const onInnerIngredientRemove = (index) => {
        const newInnerIngredients = JSON.parse(JSON.stringify(innerIngredients))
        newInnerIngredients.splice(index, 1)
        dispatch(changeInnerIngredients(newInnerIngredients))
    }
    
    const onModalClose = () =>{        
        setIsModalVisible(false)
        dispatch(removeOrderDetails())
    }  

     const sum = useMemo(() => {
        return innerIngredients.reduce((prev, curr) =>prev + curr.price, bun?.price*2 || 0)
     },[bun, innerIngredients])

    const modalOptions = {isVisible: isModalVisible, onClose:onModalClose}

    const handleOrderClick = (e) => {
        if(!bun) {
            return;
        }            
        const dataForOrder = [bun._id, ...innerIngredients.map(i => i._id), bun._id]
        dispatch(getOrderDetailsThunk(dataForOrder))
        setIsModalVisible(true)
    }
    
    return (
        <div className={burgerConstructorStyles.container + ' mt-25 pt-2 pb-2'} ref={dropTarget}>
            <div className={burgerConstructorStyles.list_item + ' pb-4 ml-4 mr-4'}>
            {bun && (<div style={{width: '536px'}}>
                    <ConstructorElement  
                    type={'top'}
                    isLocked={true}
                    text ={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image}/>
                </div>)}                
            </div>
            <div className={burgerConstructorStyles.list_container}>
            {innerIngredients.map((item, index) => (
                <div className={burgerConstructorStyles.list_item + ' pb-4 ml-4 mr-4'} key={item._id + '_' + index}>
                    <div style={{width: '36px' }}>
                        <DragIcon />
                    </div>
                    <div style={{width: '536px'}}>
                        <ConstructorElement  
                        type={item.type}
                        isLocked={false}
                        text ={item.name}
                        price={item.price}
                        thumbnail={item.image}
                        handleClose={() => onInnerIngredientRemove(index) }/>
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
                {bun && <div className={burgerConstructorStyles.total_price + ' mt-10 mr-6'}>
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
            }
            {orderDetails && <OrderDetails modalOptions={modalOptions}/>}
        </div>
    )

}

export default BurgerConstructor;