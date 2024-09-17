import { components } from "react-select";
import { SButtonAdd } from "./Select.styled";
import PlusCircleIcon from "./../../../assets/plus-circle-icon.svg";

const CustomMenuList = ({ onOpen, ...props }) => {
  return (
    <components.MenuList {...props}>
      <SButtonAdd onClick={onOpen} type="button">
        <PlusCircleIcon />
        დაამატე აგენტი
      </SButtonAdd>
      {props.children}
    </components.MenuList>
  );
};

export default CustomMenuList;
