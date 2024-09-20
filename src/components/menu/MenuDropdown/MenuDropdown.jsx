import { Menu, MenuButton, MenuItem, ChakraProvider } from "@chakra-ui/react";
import { chakraTheme } from "./../../../utils/theme";
import { ChevronDownIcon, ChevronUpIcon } from "../../../assets";
import { SMenuButton, SMenuList } from "./MenuDropdown.styled";
import { Button } from "../../UI/Shared";

const MenuDropdown = ({
  label,
  btnLabel = "არჩევა",
  children,
  onClick,
  ...props
}) => {
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
              {children}
              {onClick && (
                <Button $small onClick={onClick}>
                  {btnLabel}
                </Button>
              )}
            </SMenuList>
          </>
        )}
      </Menu>
    </ChakraProvider>
  );
};

export default MenuDropdown;
