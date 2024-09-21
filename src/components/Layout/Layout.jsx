import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FilterProvider } from "../../context/FilterContext";
import { useModal } from "../../context/ModalContext";
import { ModalComponent, Header } from "./../index";
import { animationConfig } from "../../utils/animationConfig";
import { SContainer } from "../../styles/SharedStyles";
import { SLayout, SMain } from "./Layout.styled";

const Layout = () => {
  const location = useLocation();
  const { isOpen, modalContent, openModal, closeModal } = useModal();

  return (
    <FilterProvider>
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
              <motion.div
                key={location.pathname}
                {...animationConfig}
                style={{ width: "100%" }}
              >
                <Outlet context={{ openModal, closeModal }} />
              </motion.div>
            </AnimatePresence>
          </SContainer>
        </SMain>
      </SLayout>
    </FilterProvider>
  );
};

export default Layout;
