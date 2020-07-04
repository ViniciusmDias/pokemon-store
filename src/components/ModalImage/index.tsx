import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import Drawer from '../../containers/Drawer';
import './styles.css';

interface ModalImageProps {
  url: string;
  show: boolean;
  setShow: Function;
}

const ModalImage: React.FC<ModalImageProps> = ({ url, show, setShow }) => {
  function closeModal() {
    if (show) setShow(false);
    else setShow(true);
  }

  return (
    <>
      {show && (
        <Drawer>
          <div className="modal">
            <div className="modal__image">
              <img src={url} alt="Foto do produto" />

              <button onClick={closeModal} className="modal__close">
                <AiOutlineClose size={18} color="#000" />
              </button>
            </div>
          </div>
        </Drawer>
      )}
    </>
  );
};
export default ModalImage;
