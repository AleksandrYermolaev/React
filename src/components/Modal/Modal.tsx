import { createPortal } from 'react-dom';
import classes from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: (event: React.MouseEvent) => void;
  children: React.ReactNode;
}

const portal = document.getElementById('portal') as HTMLElement;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return isOpen
    ? createPortal(
        <div className={classes.modal} onClick={onClose} data-testid="modal">
          <div className={classes.content} onClick={(event) => event.stopPropagation()}>
            <button aria-label="close modal window" className={classes.close} onClick={onClose} />
            {children}
          </div>
        </div>,
        portal
      )
    : null;
};

export default Modal;
