import { TFeedOrder } from '../../types/types'
import { FunctionComponent } from 'react';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'
type TOrderItem = {
    order: TFeedOrder
}
const OrderItem: FunctionComponent<TOrderItem> = ({ order }) => {
    return (
        <div>
            <FormattedDate date={new Date(order?.createdAt)} />
        </div>
    )
}

export default OrderItem;