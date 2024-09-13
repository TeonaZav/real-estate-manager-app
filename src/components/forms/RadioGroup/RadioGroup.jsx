import { SRadioWrapper, SRadioLabel, SRadio } from "./RadioGroup.styled";
import { useFormContext } from "react-hook-form";

const RadioGroup = ({ fieldName, options }) => {
  const { register } = useFormContext();

  return (
    <SRadioWrapper>
      {options.map((option) => (
        <SRadioLabel key={option.value}>
          <SRadio
            type="radio"
            value={option.value}
            {...register(fieldName)}
            defaultChecked={option.defaultChecked}
          />
          {option.label}
        </SRadioLabel>
      ))}
    </SRadioWrapper>
  );
};

export default RadioGroup;
