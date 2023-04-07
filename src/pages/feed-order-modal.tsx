
import Modal from '../components/Modal/Modal'
import OrderInfo from '../components/OrderInfo/OrderInfo'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../hooks/hooks'

export function FeedOrderModal() {
    const navigate = useNavigate()
    useEffect(() => {
        window.history.replaceState({}, document.title)
    }, [])
    const { id } = useParams()
    const orders = useAppSelector(store => store.wsFeedReducer.message.orders)
    const order = orders.find(o => o.number === Number(id))


    const onModalClose = () => {
        navigate(-1)
    }
    const modalOptions = { onClose: onModalClose, title: '#' + order?.number }

    return (
        <Modal modalOptions={modalOptions}>
            <OrderInfo order={order} fullPage={false} />
        </Modal>
    )
}