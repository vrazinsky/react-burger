import { TFeedOrder } from '../../types/types'
import { FunctionComponent } from 'react';
import OrderItem from '../OrderItem/OrderItem'
import orderListStyles from './OrdersList.module.css'
type TOrdersList = {
    orders: TFeedOrder[]
}
const OrdersList: FunctionComponent<TOrdersList> = ({ orders }) => {
    return (
        <div className={orderListStyles.list}>
            {orders && orders.map(order =>
                <div className='mt-4 mr-2'>
                    <OrderItem order={order} />
                </div>
            )}
        </div>
    )
}

export default OrdersList;