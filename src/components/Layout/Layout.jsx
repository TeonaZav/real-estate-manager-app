import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../Header/Header";
import { animationConfig } from "../../utils/animationConfig";
import { SContainer } from "../../styles/SharedStyles";
import { SLayout, SMain } from "./Layout.styled";

const Layout = () => {
  const location = useLocation();

  return (
    <SLayout>
      <Header />
      <SMain $pathname={location.pathname}>
        <SContainer>
          <AnimatePresence mode="wait">
            <motion.div key={location.pathname} {...animationConfig}>
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </SContainer>
      </SMain>
    </SLayout>
  );
};

export default Layout;
