import { SContainer } from "../../styles/SharedStyles";
import { SHeader, SLogo } from "./Header.styled";
import logo from "./../../assets/logo.svg";
const Header = () => {
  return (
    <SHeader>
      <SContainer>
        <SLogo>
          <img src={logo} alt="Redberry logo" />
        </SLogo>
      </SContainer>
    </SHeader>
  );
};

export default Header;
