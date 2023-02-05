import orderDetailsStyles from './OrderDetails.module.css'
import Modal from '../Modal/Modal'
import PropTypes from 'prop-types'
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { modalOptionsShape } from '../../utils/prop-types'

function OrderDetails({modalOptions, id, state, description}) {
    return (
        <Modal modalOptions={modalOptions} >
            <div> 
                <div className={orderDetailsStyles.center + ' text text_type_digits-large'}>
                    {id}
                </div>
                <div className={orderDetailsStyles.center + ' text text_type_main-medium mt-8'} >
                    идентификатор заказа
                </div>
                <div className={orderDetailsStyles.center + ' mt-15'}>
                <CheckMarkIcon />
                </div>
                <div className={orderDetailsStyles.center + ' text text_type_main-small mt-15'} >
                   {state}
                </div>
                <div className={orderDetailsStyles.center + ' text text_type_main-small text_color_inactive mt-2 mb-20'} >
                   {description}
                </div>
            </div>
        </Modal>    
    )
    
}

OrderDetails.propTypes = {
    id: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    modalOptions: modalOptionsShape.isRequired
}

export default OrderDetails;