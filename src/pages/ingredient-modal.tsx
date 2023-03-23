
import Modal from '../components/Modal/Modal'
import { useNavigate } from 'react-router-dom'
import IngredientDetails from '../components/IngredientDetails/IngredientDetails'

export function IngredientModal() {
    const navigate = useNavigate()

    const onModalClose = () => {
        navigate(-1)
    }
    const modalOptions = { onClose: onModalClose, title: 'Детали ингредиента' }

    return (
        <Modal modalOptions={modalOptions}>
            <IngredientDetails hideTitle={true} />
        </Modal>
    )
}