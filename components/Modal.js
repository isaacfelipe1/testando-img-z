// components/Modal.js
import { useState } from 'react';
import { ReactSVGPanZoom } from 'react-zoom-pan-pinch';

const Modal = ({ imageUrl, alt, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  }

  return (
    <>
      <div onClick={openModal}>
        <img src={imageUrl} alt={alt} />
      </div>
      
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={closeModal}>Close</button>
            <ReactSVGPanZoom width={400} height={400} background="#ffffff">
              <img src={imageUrl} alt={alt} width={400} height={400} />
            </ReactSVGPanZoom>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal {
          background-color: white;
          padding: 20px;
          border-radius: 5px;
        }

        .close {
          position: absolute;
          top: 10px;
          right: 10px;
        }
      `}</style>
    </>
  );
};

export default Modal;
