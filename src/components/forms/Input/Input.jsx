import { useFormContext } from "react-hook-form";
import { SInput } from "./Input.styled";

const Input = ({ type = "text", fieldName }) => {
  const {
    register,
    formState: { errors, dirtyFields },
  } = useFormContext();
  const fieldError = errors?.[fieldName]; 
  const hasError = !!errors?.[fieldName]; 

  const isDirty = !!dirtyFields[fieldName]; 
  const isSuccess = isDirty && !hasError; 
  
  return (
    <SInput
      type={type}
      id={fieldName}
      {...register(fieldName)}
      $error={fieldError}
      $success={isSuccess}
    />
  );
};

export default Input;
