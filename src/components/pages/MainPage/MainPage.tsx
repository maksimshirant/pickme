import React, { FC, useState } from 'react';
import st from './MainPage.module.scss'
import Modal from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';
import PickMe from "../../PickMe";

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
         <Button onClick={openModalHandler} className={st.btnMain}>Ты пикми?</Button>
         <Modal isOpen={openModal} onClose={closeModalHandler}>
            <PickMe/>
         </Modal>
      </div>
   );
};

export default MainPage;