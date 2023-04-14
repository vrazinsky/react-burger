import { TFeedOrder } from '../../types/types'
import { FunctionComponent } from 'react';
import OrderItem from '../OrderItem/OrderItem'
import orderListStyles from './OrdersList.module.css'
type TOrdersList = {
    orders: TFeedOrder[];
    clickHandler: Function;
}
const OrdersList: FunctionComponent<TOrdersList> = ({ orders, clickHandler }) => {
    return (
        <div className={orderListStyles.list}>
            {orders && orders.map(order =>
                <div className='mt-4 mr-2' key={order._id}>
                    <OrderItem order={order} clickHandler={clickHandler} />
                </div>
            )}
        </div>
    )
}

export default OrdersList;