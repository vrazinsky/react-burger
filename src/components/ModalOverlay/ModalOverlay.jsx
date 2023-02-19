import modalOverlayStyles from './ModalOverlay.module.css'
import PropTypes from 'prop-types';


function ModalOverlay({ close }) {
    return (
        <div className={modalOverlayStyles.overlay} onClick={close} />
    )
}

ModalOverlay.propTypes = {
    close: PropTypes.func.isRequired
}

export default ModalOverlay;