import modalOverlayStyles from './ModalOverlay.module.css'
import { FunctionComponent } from 'react'

type TModalOverlay = {
    close: () => void
}


const ModalOverlay: FunctionComponent<TModalOverlay> = ({ close }) => {
    return (
        <div className={modalOverlayStyles.overlay} onClick={close} />
    )
}

export default ModalOverlay;