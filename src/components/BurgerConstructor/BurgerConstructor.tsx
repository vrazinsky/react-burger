import { useState, useMemo, useCallback, useEffect, useRef } from 'react'
import burgerConstructorStyles from './BurgerConstructor.module.css'
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import OrderDetails from '../OrderDetails/OrderDetails'
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
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { TIngredient } from '../../types/types'
import { getAuth, getOrderDetails, getConstructorIngredients } from '../../store/store'
import { AppThunkDispatch } from '../../store/store'

function BurgerConstructor() {
    const storeIngredients = useAppSelector(getConstructorIngredients)
    const [bun, setBun] = useState<TIngredient | null>(null)
    const [innerIngredients, setInnerIngredients] = useState<Array<TIngredient>>([])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const dispatch: AppThunkDispatch = useAppDispatch()
    const { orderDetailsRequest, orderDetails } = useAppSelector(getOrderDetails)
    const { user } = useAppSelector(getAuth);
    const navigate = useNavigate()

    const ref = useRef<HTMLInputElement>(null);
    useDndScrolling(ref, {})

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

    const onDrop = (ingredient: TIngredient) => {
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
            onDrop(ingredient as TIngredient)
        },
    });

    const onInnerIngredientRemove = useCallback((id: string, index: number) => {
        const newInnerIngredients = JSON.parse(JSON.stringify(innerIngredients))
        newInnerIngredients.splice(index, 1)
        dispatch(changeInnerIngredients(newInnerIngredients))
        dispatch(decreaseIngredientCounter(id))
    }, [dispatch, innerIngredients])

    const onModalClose = () => {
        setIsModalVisible(false)
        dispatch(removeOrderDetails())
    }

    const onConstructorElementDrop = (isDropSuccessful: boolean) => {
        if (isDropSuccessful) {
            dispatch(changeInnerIngredients(innerIngredients))
        } else {
            setInnerIngredients(storeIngredients.innerIngredients)
        }
    }

    const sum = useMemo(() => {
        return innerIngredients.reduce((prev, curr: TIngredient) => prev + curr?.price, (bun?.price || 0) * 2)
    }, [bun, innerIngredients])

    const modalOptions = { onClose: onModalClose }

    const handleOrderClick = () => {
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

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
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
                    <  DraggableConstructorElement ingredient={item} onInnerIngredientRemove={onInnerIngredientRemove} moveCard={moveCard} index={index} key={item.uuid} onDrop={onConstructorElementDrop} />
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
                    <CurrencyIcon type="primary" />
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