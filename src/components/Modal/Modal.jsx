
import { useEffect } from 'react'
import { createPortal } from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import modalStyles from './Modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { modalOptionsShape } from '../../utils/prop-types'

const ESCAPEKEY = 27;

function Modal({modalOptions, children}) {        
    const modalRoot = document.getElementById("modals");
    const {isVisible, onClose, title} = modalOptions
    const close = (e) => {
        if (!e.nativeEvent && e.keyCode !== ESCAPEKEY) {
            return;
        }        
        onClose()
    }

    const handleModalClick = (e) => {
        e.stopPropagation();
    } 

    useEffect(() => {
        document.addEventListener('keydown', close);
        return () => {
            document.removeEventListener('keydown', close);
        }
    })
    
    return createPortal((
        isVisible && <>
        <ModalOverlay close={close} />
            <div className={modalStyles.modal + ' pt-10 pb-10'} onClick={handleModalClick}>                
                <div className={modalStyles.toolbar + ' ml-10 mr-10'}>
                    <div className='text text_type_main-large'>{title}</div>
                    <div className={modalStyles.close} onClick={close}><CloseIcon /></div>
                </div>
                <div className={modalStyles.content + ' ml-30 mr-30'}>
                    {children}
                </div>
            </div>       
        </>    
        
    ), modalRoot)
}

Modal.propTypes = {
    modalOptions: modalOptionsShape.isRequired
}

export default Modal;


