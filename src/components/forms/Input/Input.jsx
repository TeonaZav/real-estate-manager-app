import { useFormContext } from "react-hook-form";
import { SInput } from "./Input.styled";

const Input = ({ type = "text", fieldName }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors?.[fieldName];

  return (
    <SInput
      type={type}
      id={fieldName}
      {...register(fieldName)}
      $error={fieldError}
    />
  );
};

export default Input;
