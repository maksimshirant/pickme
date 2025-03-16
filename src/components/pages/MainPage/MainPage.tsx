import React, { FC, useState } from 'react';
import st from './MainPage.module.scss'
import Modal from '../../UI/Modal/Modal';
import CalcModal from '../../CalcModal/CalcModal';
import Button from '../../UI/Button/Button';

const MainPage: FC = () => {
   const [openModal, setOpenModal] = useState<boolean>(false)
   const openModalHandler = () => {
      setOpenModal(true);
   };
   const closeModalHandler = () => {
      setOpenModal(false);
   };
   return (
      <div className={st.content}>
         <Button onClick={openModalHandler} className={st.btnMain}>Расчет платежей</Button>
         <Modal isOpen={openModal} onClose={closeModalHandler}>
            <CalcModal />
         </Modal>
      </div>
   );
};

export default MainPage;