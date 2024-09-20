import { useFormContext, Controller } from "react-hook-form";
import { components } from "react-select";

import { useModal } from "../../../context/ModalContext";
import CustomMenuList from "./CustomMenuList";
import { SSelect } from "./Select.styled";
import DropdownIcon from "./../../../assets/icons/icon-down.svg";

const CustomDropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <DropdownIcon />
    </components.DropdownIndicator>
  );
};

const SelectField = ({
  options,
  fieldName,
  useCustomMenu = false,
  customModalContent,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { openModal, closeModal } = useModal();

  const handleOpenModal = () => {
    if (customModalContent) {
      openModal(customModalContent({ onClose: closeModal }));
    }
  };

  const hasError = errors?.[fieldName];

  return (
    <Controller
      name={fieldName}
      control={control}
      render={({ field: { onChange, value, ...rest } }) => (
        <SSelect
          {...rest}
          options={options}
          value={options.find((option) => option.value === value) || null}
          onChange={(selectedOption) => onChange(selectedOption.value)}
          $hasError={hasError}
          components={{
            DropdownIndicator: CustomDropdownIndicator,
            ...(useCustomMenu && {
              MenuList: (props) => (
                <CustomMenuList onOpen={handleOpenModal} {...props} />
              ),
            }),
          }}
          placeholder=""
        />
      )}
    />
  );
};

export default SelectField;
