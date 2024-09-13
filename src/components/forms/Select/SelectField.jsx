import { useFormContext, Controller } from "react-hook-form";
import { SSelect } from "./SelectField.styled";

const SelectField = ({ options, fieldName }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

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
          placeholder=""
        />
      )}
    />
  );
};

export default SelectField;
