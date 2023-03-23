import orderDetailsStyles from './OrderDetails.module.css'
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import { FunctionComponent } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { getOrderDetails } from '../../store/store'

const OrderDetails: FunctionComponent = () => {
    const { orderDetails } = useAppSelector(getOrderDetails)
    return (
        orderDetails &&
        <div>
            <div className={orderDetailsStyles.center + ' text text_type_digits-large'}>
                {orderDetails.number}
            </div>
            <div className={orderDetailsStyles.center + ' text text_type_main-medium mt-8'} >
                идентификатор заказа
            </div>
            <div className={orderDetailsStyles.center + ' mt-15'}>
                <CheckMarkIcon type="primary" />
            </div>
            <div className={orderDetailsStyles.center + ' text text_type_main-small mt-15'} >
                Ваш заказ начали готовить
            </div>
            <div className={orderDetailsStyles.center + ' text text_type_main-small text_color_inactive mt-2 mb-20'} >
                Дождитесь готовности на орбитальной станции
            </div>
        </div>
    )

}

export default OrderDetails;