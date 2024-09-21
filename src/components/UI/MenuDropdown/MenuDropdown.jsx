import React from "react";
import { Menu, MenuButton, ChakraProvider } from "@chakra-ui/react";
import { chakraTheme } from "../../../utils/theme";
import { ChevronDownIcon, ChevronUpIcon } from "../../../assets";
import { SMenuButton, SMenuList } from "./MenuDropdown.styled";

const MenuDropdown = ({ label, children, ...props }) => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Menu>
        {({ isOpen, onClose }) => (
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
              {React.cloneElement(children, { onClose })}
            </SMenuList>
          </>
        )}
      </Menu>
    </ChakraProvider>
  );
};

export default MenuDropdown;
