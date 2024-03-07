import { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const Modal = ({ imageUrl, alt, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
    onClose(); // Chama a função de fechamento passada como prop
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
            <TransformWrapper
              defaultScale={1}
              defaultPositionX={0}
              defaultPositionY={0}
              options={{
                limitToBounds: false,
                minScale: 0.5,
                maxScale: 3,
                pan: { disabledOnMobile: false } // Habilita a movimentação (pan) para dispositivos móveis
              }}
            >
              {({ zoomIn, zoomOut, ...rest }) => (
                <TransformComponent>
                  <img src={imageUrl} alt={alt} />
                </TransformComponent>
              )}
            </TransformWrapper>
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
          overflow: hidden; /* Garante que a imagem não ultrapasse o modal */
        }

        .close {
          position: absolute;
          top: 10px;
          right: 10px;
        }

        img {
          max-width: 100%;
          max-height: 80vh;
        }
      `}</style>
    </>
  );
};

export default Modal;
