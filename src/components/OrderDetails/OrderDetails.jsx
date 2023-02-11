import {useContext} from 'react'
import orderDetailsStyles from './OrderDetails.module.css'
import Modal from '../Modal/Modal'
import PropTypes from 'prop-types'
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { modalOptionsShape } from '../../utils/prop-types'
import {OrderDetailsContext  } from '../../utils/order-details-context'

function OrderDetails({modalOptions}) {
    const { orderId } = useContext(OrderDetailsContext)
    return (        
        <Modal modalOptions={modalOptions} >
            <div> 
                <div className={orderDetailsStyles.center + ' text text_type_digits-large'}>
                    {orderId}
                </div>
                <div className={orderDetailsStyles.center + ' text text_type_main-medium mt-8'} >
                    идентификатор заказа
                </div>
                <div className={orderDetailsStyles.center + ' mt-15'}>
                <CheckMarkIcon />
                </div>
                <div className={orderDetailsStyles.center + ' text text_type_main-small mt-15'} >
                    Ваш заказ начали готовить
                </div>
                <div className={orderDetailsStyles.center + ' text text_type_main-small text_color_inactive mt-2 mb-20'} >
                    Дождитесь готовности на орбитальной станции
                </div>
            </div>
        </Modal>    
    )
    
}

OrderDetails.propTypes = {
    modalOptions: modalOptionsShape.isRequired
}

export default OrderDetails;