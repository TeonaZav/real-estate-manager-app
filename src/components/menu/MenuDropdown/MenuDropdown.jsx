import { Menu, MenuButton, MenuItem, ChakraProvider } from "@chakra-ui/react";
import { chakraTheme } from "./../../../utils/theme";
import { ChevronDownIcon, ChevronUpIcon } from "../../../assets";
import { SMenuButton, SMenuList } from "./MenuDropdown.styled";

const MenuDropdown = ({ label, children, ...props }) => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              $isOpen={isOpen}
              as={SMenuButton}
              rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            >
              {label}
            </MenuButton>
            <SMenuList {...props}>
              <MenuItem>Download</MenuItem>
              <MenuItem onClick={() => alert("Kagebunshin")}>
                Create a Copy
              </MenuItem>
              {children}
            </SMenuList>
          </>
        )}
      </Menu>
    </ChakraProvider>
  );
};

export default MenuDropdown;
