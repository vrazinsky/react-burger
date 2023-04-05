import orderItemStyles from './OrderItem.module.css'
import { TFeedOrder } from '../../types/types'
import { FunctionComponent, useMemo } from 'react';
import { FormattedDate, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useAppSelector } from '../../hooks/hooks'
import { TIngredient } from '../../types/types'
import { current } from '@reduxjs/toolkit';

type TOrderItem = {
    order: TFeedOrder
}
const OrderItem: FunctionComponent<TOrderItem> = ({ order }) => {
    // const order = {
    //     "ingredients": [
    //         "60d3b41abdacab0026a733c6",
    //         "60d3b41abdacab0026a733d0",
    //         "60d3b41abdacab0026a733d0",
    //         "60d3b41abdacab0026a733d0",
    //         "60d3b41abdacab0026a733d0",
    //         "60d3b41abdacab0026a733d0",
    //         "60d3b41abdacab0026a733d0",
    //         "60d3b41abdacab0026a733d0",
    //     ],
    //     "_id": "",
    //     "status": "done",
    //     "number": 12345,
    //     "name": "Мега бургер",
    //     "createdAt": "2021-06-23T14:43:22.587Z",
    //     "updatedAt": "2021-06-23T14:43:22.603Z"
    // }

    const ingredients = useAppSelector(store => store.ingredientsReducer.ingredients)
    const currentIngredients = useMemo(() => {
        if (!ingredients || ingredients.length === 0 || !order?.ingredients || order.ingredients.length === 0) {
            return [];
        }
        return order.ingredients.map(id => ingredients.find(i => i._id === id) as TIngredient)
    }, [order.ingredients, ingredients])

    const images = useMemo(() => currentIngredients.map(i => i?.image_mobile), [currentIngredients])

    const sum = useMemo(() => {
        if (!currentIngredients || currentIngredients.length === 0) {
            return 0;
        }
        console.log(currentIngredients)
        const bun = currentIngredients.find(i => i.type === 'bun')
        const innerIngredients = currentIngredients.filter(i => i?.type !== 'bun')
        return innerIngredients.reduce((prev, curr: TIngredient) => prev + curr?.price, (bun?.price || 0) * 2)
    }, [currentIngredients])

    const counter = useMemo(() => {
        return currentIngredients.length - 6;
    }, [currentIngredients])

    return (
        <div className={orderItemStyles.wrap + ' p-6'}>
            <div className={orderItemStyles.flex_container}>
                <div className='text text_type_digits-default'>
                    #{order.number}
                </div>
                <div className='text text_type_main-default text_color_inactive'>
                    <FormattedDate date={new Date(order?.createdAt)} />
                </div>
            </div>
            <div className='text text_type_digits-default mt-6'>
                {order.name}
            </div>
            <div className={orderItemStyles.image_price_container + ' mt-6'}>
                <div className={orderItemStyles.images_container}>
                    {
                        images.map((image, index) => index <= 5 && <div className={orderItemStyles.ingredient_preview + ' ' + orderItemStyles["image-" + (index + 1)]}>
                            <img src={image} className={orderItemStyles.image} alt={order.name} />
                            {index === 5 && <div className={orderItemStyles.counter + ' text text_type_digits-small'}>+{counter}</div>}
                        </div>)
                    }
                </div>
                <div className={orderItemStyles.total_price}>
                    <div className='text text_type_digits-default'>
                        {sum > 0 && sum}
                    </div>
                    <div className='ml-1'>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OrderItem;