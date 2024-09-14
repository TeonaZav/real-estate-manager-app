import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "../../context/ModalContext";
import ModalComponent from "../ModalComponent/ModalComponent";
import Header from "../Header/Header";
import { animationConfig } from "../../utils/animationConfig";
import { SContainer } from "../../styles/SharedStyles";
import { SLayout, SMain } from "./Layout.styled";

const Layout = () => {
  const location = useLocation();
  const { isOpen, modalContent, openModal, closeModal } = useModal();

  return (
    <SLayout>
      <Header />
      {isOpen && (
        <ModalComponent isOpen={isOpen} onClose={closeModal}>
          {modalContent}
        </ModalComponent>
      )}
      <SMain $pathname={location.pathname}>
        <SContainer>
          <AnimatePresence mode="wait">
            <motion.div key={location.pathname} {...animationConfig}>
              <Outlet context={{ openModal, closeModal }} />
            </motion.div>
          </AnimatePresence>
        </SContainer>
      </SMain>
    </SLayout>
  );
};

export default Layout;
