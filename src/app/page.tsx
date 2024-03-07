// pages/index.js
"use client";
import { useState } from 'react';
import Modal from '../../components/Modal';

const IndexPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>Hello Next.js</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        imageUrl="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png"
        alt="Example Image"
        onClose={closeModal}
      />
    </div>
  );
};

export default IndexPage;
