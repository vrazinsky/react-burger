import modalOverlayStyles from './ModalOverlay.module.css'
import PropTypes from 'prop-types';


function ModalOverlay({close, children}) {    
    return(
        <div className={modalOverlayStyles.overlay} onClick={close}>
            {children}
        </div>
    )
}

ModalOverlay.propTypes = {
    close: PropTypes.func
}

export default ModalOverlay;