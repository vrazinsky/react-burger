import { useState, useMemo, useCallback, useEffect, useRef } from 'react'
import burgerConstructorStyles from './BurgerConstructor.module.css'
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import OrderDetails from '../OrderDetails/OrderDetails'
import { useSelector, useDispatch } from 'react-redux';
import { getOrderDetailsThunk } from '../../services/thunks/thunks'
import { useDrop } from 'react-dnd'
import { addBunToCunstructor, addInnerIngredientToConstructor, removeOrderDetails, changeInnerIngredients, increaseIngredientCounter, decreaseIngredientCounter, removeBunFromConstructor, clearIngredientCounter } from '../../services/actions/actions'
import DraggableConstructorElement from '../DraggableConstructorElement/DraggableConstructorElement'
import { v4 as uuidv4 } from 'uuid';
import { useDndScrolling } from 'react-dnd-scrolling';
import Modal from '../Modal/Modal'
import { ProgressBar } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom';
import { addReturnUrl } from '../../services/actions/auth-actions'

function BurgerConstructor() {
    const storeIngredients = useSelector(store => store.constructorItemsReducer.constructorIngredients)
    const [bun, setBun] = useState(null)
    const [innerIngredients, setInnerIngredients] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const dispatch = useDispatch()
    const { orderDetailsRequest, orderDetails } = useSelector(store => store.orderDetailsReducer)
    const { user } = useSelector(store => store.authReducer);
    const navigate = useNavigate()

    const ref = useRef(null);
    useDndScrolling(ref)

    useEffect(() => {
        setBun(storeIngredients.bun)
    }, [storeIngredients.bun])

    useEffect(() => {
        if (storeIngredients.innerIngredients) {
            setInnerIngredients(storeIngredients.innerIngredients)
        }
    }, [storeIngredients.innerIngredients])

    useEffect(() => {
        if (orderDetails) {
            setIsModalVisible(true)
            dispatch(changeInnerIngredients([]))
            dispatch(removeBunFromConstructor())
            dispatch(clearIngredientCounter())
        }
    }, [dispatch, orderDetails])

    const onDrop = (ingredient) => {
        if (ingredient.type === 'bun') {
            if (bun) {
                dispatch(decreaseIngredientCounter(bun._id))
            }
            dispatch(addBunToCunstructor({ ...ingredient }))
            dispatch(increaseIngredientCounter(ingredient._id))
        } else {
            if (bun) {
                const curIngredient = { ...ingredient, uuid: uuidv4() }
                dispatch(addInnerIngredientToConstructor(curIngredient))
                dispatch(increaseIngredientCounter(ingredient._id))
            }
        }
    }

    const [, dropTarget] = useDrop({
        accept: "food",
        drop(ingredient) {
            onDrop(ingredient)
        },
    });

    const onInnerIngredientRemove = useCallback((id, index) => {
        const newInnerIngredients = JSON.parse(JSON.stringify(innerIngredients))
        newInnerIngredients.splice(index, 1)
        dispatch(changeInnerIngredients(newInnerIngredients))
        dispatch(decreaseIngredientCounter(id))
    }, [dispatch, innerIngredients])

    const onModalClose = () => {
        setIsModalVisible(false)
        dispatch(removeOrderDetails())
    }

    const onConstructorElementDrop = (isDropSuccessful) => {
        if (isDropSuccessful) {
            dispatch(changeInnerIngredients(innerIngredients))
        } else {
            setInnerIngredients(storeIngredients.innerIngredients)
        }
    }

    const sum = useMemo(() => {
        return innerIngredients.reduce((prev, curr) => prev + curr?.price, bun?.price * 2 || 0)
    }, [bun, innerIngredients])

    const modalOptions = { onClose: onModalClose }

    const handleOrderClick = (e) => {
        if (!user) {
            dispatch(addReturnUrl('/'))
            navigate('/login')
            return;
        }
        if (!bun) {
            return;
        }
        const dataForOrder = [bun._id, ...innerIngredients.map(i => i._id), bun._id]
        dispatch(getOrderDetailsThunk(dataForOrder))
    }

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        const newInnerIngredients = JSON.parse(JSON.stringify(innerIngredients))
        newInnerIngredients[dragIndex] = newInnerIngredients.splice(hoverIndex, 1, newInnerIngredients[dragIndex])[0]
        setInnerIngredients(newInnerIngredients)
    }, [innerIngredients])


    return (
        <div className={burgerConstructorStyles.container + ' mt-25 pt-2 pb-2'} ref={dropTarget}>
            <div className={burgerConstructorStyles.list_item + ' pb-4 ml-4 mr-4'}>
                {bun && (<div className={burgerConstructorStyles.bun}>
                    <ConstructorElement
                        type={'top'}
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image} />
                </div>)}
            </div>
            <div className={burgerConstructorStyles.list_container} ref={ref}>
                {innerIngredients.map((item, index) =>
                    <  DraggableConstructorElement ingredient={item} onInnerIngredientRemove={onInnerIngredientRemove} moveCard={moveCard} uuid={item.uuid} index={index} key={item.uuid} onDrop={onConstructorElementDrop} />
                )}
            </div>
            <div className={burgerConstructorStyles.list_item + ' pb-4 ml-4 mr-4 mt-4'}>
                {bun && <div className={burgerConstructorStyles.bun}>
                    <ConstructorElement
                        type={'bottom'}
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image} />
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
                    {orderDetailsRequest ? <ProgressBar /> :
                        <Button htmlType="button" type="primary" size="large" onClick={handleOrderClick}>
                            Оформить заказ
                        </Button>
                    }
                </div>
            </div>
            }
            {isModalVisible && <Modal modalOptions={modalOptions}>
                <OrderDetails />
            </Modal>}
        </div>
    )

}

export default BurgerConstructor;