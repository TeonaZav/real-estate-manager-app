import { SRadioWrapper, SRadioLabel, SRadio } from "./RadioGroup.styled";
import { useFormContext } from "react-hook-form";

const RadioGroup = ({ fieldName, options }) => {
  const { register, watch } = useFormContext();
  const selectedValue = watch(fieldName);

  return (
    <SRadioWrapper>
      {options.map((option) => (
        <SRadioLabel key={option.value}>
          <SRadio
            type="radio"
            value={option.value}
            {...register(fieldName)}
            checked={selectedValue === option.value}
        
          />
          {option.label}
        </SRadioLabel>
      ))}
    </SRadioWrapper>
  );
};

export default RadioGroup;
