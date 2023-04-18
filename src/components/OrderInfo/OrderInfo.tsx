import { FunctionComponent, useMemo } from 'react';
import { TFeedOrder } from '../../types/types'
import orderInfoStyles from './OrderInfo.module.css'
import { getStateText } from '../../utils/order-status-text'
import { useAppSelector } from '../../hooks/hooks'
import { TIngredient } from '../../types/types'
import { FormattedDate, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
type TOrderInfo = {
    order: TFeedOrder | undefined;
    fullPage: boolean

}
const OrderInfo: FunctionComponent<TOrderInfo> = ({ order, fullPage = false }) => {
    const ingredients = useAppSelector(store => store.ingredientsReducer.ingredients)

    const { bun, innerIngredients, sum, counter } = useMemo(() => {
        if (!ingredients || ingredients.length === 0 || !order?.ingredients || order.ingredients.length === 0) {
            return {
                bun: null,
                innerIngredients: [],
                sum: 0,
                counter: {} as { [name: string]: number }
            };
        }
        const counter: { [name: string]: number } = {}
        //const currentIngredients = order?.ingredients.map(id => ingredients.find(i => i._id === id) as TIngredient)
        const currentIngredients = order?.ingredients.reduce<TIngredient[]>((prev: TIngredient[], curr: string) => {
            if (!counter[curr]) {
                counter[curr] = 1;
            } else {
                counter[curr]++;
            }
            if (counter[curr] === 1) {
                const ingredient = ingredients.find(i => i._id === curr) as TIngredient
                return [...prev, ingredient]
            } else {
                return prev
            }
        }, [])
        const bun = currentIngredients.find(i => i?.type === 'bun');
        const innerIngredients = currentIngredients.filter(i => i?.type !== 'bun')

        const sum = innerIngredients.reduce((prev, curr: TIngredient) => prev + (curr && curr?.price * counter[curr?._id] || 0), (bun?.price || 0) * 2)


        return {
            bun,
            innerIngredients,
            sum,
            counter
        }
    }, [order?.ingredients, ingredients])

    return (
        order ? <div className='ml-6 mr-6'>
            {fullPage && <div className={orderInfoStyles.title + ' text text_type_digits-medium mt-20'}>
                #{order.number}
            </div>}
            <div className='text text_type_main-medium mt-10'>
                {order.name}
            </div>
            <div className='text text_type_main-small mt-2'>
                <span className={order.status === 'done' ? orderInfoStyles.done : ''}>{getStateText(order.status)}</span>
            </div>
            <div className='text text_type_main-medium mt-15 mb-6'>
                Состав:
            </div>
            <div className={orderInfoStyles.ingredients_container}>
                {bun && <div className={orderInfoStyles.ingredient_container + ' mt-6 mr-6'}>
                    <div className={orderInfoStyles.flex_row}>
                        <div className={orderInfoStyles.ingredient_preview}>
                            <img src={bun.image_mobile} className={orderInfoStyles.image} alt={order.name} />
                        </div>
                        <div className='text text_type_main-default ml-4'>
                            {bun.name}
                        </div>
                    </div>
                    <div className={orderInfoStyles.flex_row}>
                        <div className='ext text_type_digits-default ml-4'>
                            2 x {bun.price}
                        </div>
                        <div className='ml-1'>
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                </div>}
                {innerIngredients && innerIngredients.map((ingredient, index) => ingredient && <div className={orderInfoStyles.ingredient_container + ' mt-6 mr-6'} key={ingredient._id + '_' + index}>
                    <div className={orderInfoStyles.flex_row}>
                        <div className={orderInfoStyles.ingredient_preview}>
                            <img src={ingredient.image_mobile} className={orderInfoStyles.image} alt={order.name} />
                        </div>
                        <div className='text text_type_main-default ml-4'>
                            {ingredient.name}
                        </div>
                    </div>
                    <div className={orderInfoStyles.flex_row}>
                        <div className='ext text_type_digits-default ml-4'>
                            {counter[ingredient._id]} x {ingredient.price}
                        </div>
                        <div className='ml-1'>
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                </div>)}

            </div>
            <div className={orderInfoStyles.ingredient_container + ' mt-10'}>
                <div className='text text_type_main-default text_color_inactive'>
                    <FormattedDate date={new Date(order?.createdAt)} />
                </div>
                <div className={orderInfoStyles.total_price}>
                    <div className='text text_type_digits-default'>
                        {sum > 0 && sum}
                    </div>
                    <div className='ml-1'>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </div>

        </div> : <div></div>
    )
}

export default OrderInfo;