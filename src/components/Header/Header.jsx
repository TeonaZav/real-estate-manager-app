import { SContainer } from "../../styles/SharedStyles";
import { SHeader, SLogo } from "./Header.styled";
import Logo from "./../../assets/logo.svg";
const Header = () => {
  return (
    <SHeader>
      <SContainer>
        <SLogo>
          <Logo />
        </SLogo>
      </SContainer>
    </SHeader>
  );
};

export default Header;
