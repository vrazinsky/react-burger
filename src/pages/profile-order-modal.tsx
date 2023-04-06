
import Modal from '../components/Modal/Modal'
import OrderInfo from '../components/OrderInfo/OrderInfo'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export function ProfileOrderModal() {
    const navigate = useNavigate()
    useEffect(() => {
        window.history.replaceState({}, document.title)
    }, [])

    const onModalClose = () => {
        navigate(-1)
    }
    const modalOptions = { onClose: onModalClose }

    return (
        <Modal modalOptions={modalOptions}>
            <OrderInfo order={undefined} withTitle={false} />
        </Modal>
    )
}