import { TFeedOrder } from '../../types/types'
import { FunctionComponent } from 'react';
import OrderItem from '../OrderItem/OrderItem'
type TOrdersList = {
    orders: TFeedOrder[]
}
const OrdersList: FunctionComponent<TOrdersList> = ({ orders }) => {
    return (
        orders &&
        <OrderItem order={orders[0]} />
    )
}

export default OrdersList;