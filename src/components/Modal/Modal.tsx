
import { useEffect, FunctionComponent } from 'react'
import { createPortal } from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import modalStyles from './Modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const ESCAPEKEYSTRING = 'Escape';

type TModal = {
    modalOptions: { title?: string, onClose: Function },
    children?: React.ReactNode
}

const Modal: FunctionComponent<TModal> = ({ modalOptions, children }) => {
    const modalRoot = document.getElementById("modals")!;
    const { onClose, title } = modalOptions

    const documentOnClose = (e: KeyboardEvent) => {
        if (e.key !== ESCAPEKEYSTRING) {
            return;
        }
        onClose()
    }

    const close = () => {
        onClose()
    }

    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }

    useEffect(() => {
        document.addEventListener('keydown', documentOnClose);
        return () => {
            document.removeEventListener('keydown', documentOnClose);
        }
    })

    return createPortal((
        <>
            <ModalOverlay close={close} />
            <div className={modalStyles.modal + ' pt-10 pb-10'} onClick={handleModalClick}>
                <div className={modalStyles.toolbar + ' ml-10 mr-10'}>
                    <div className='text text_type_main-large'>{title}</div>
                    <div className={modalStyles.close} onClick={close}><CloseIcon type="primary" /></div>
                </div>
                <div className={modalStyles.content}>
                    {children}
                </div>
            </div>
        </>

    ), modalRoot)
}

export default Modal;


