import modalOverlayStyles from './ModalOverlay.module.css'
import PropTypes from 'prop-types';
import { FunctionComponent } from 'react'

type TModalOverlay = {
    close: () => void
}


const ModalOverlay: FunctionComponent<TModalOverlay> = ({ close }) => {
    return (
        <div className={modalOverlayStyles.overlay} onClick={close} />
    )
}

ModalOverlay.propTypes = {
    close: PropTypes.func.isRequired
}

export default ModalOverlay;