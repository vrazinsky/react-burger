
import Modal from '../components/Modal/Modal'
import { useNavigate } from 'react-router-dom'
import { IngredientPage } from '../pages'

export function IngredientModal() {
    const navigate = useNavigate()

    const onModalClose = () => {
        navigate(-1)
    }
    const modalOptions = { onClose: onModalClose, title: 'Детали ингредиента' }

    return (
        <Modal modalOptions={modalOptions}>
            <IngredientPage hideTitle={true} />
        </Modal>
    )
}