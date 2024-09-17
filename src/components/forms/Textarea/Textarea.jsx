import { useFormContext } from "react-hook-form";
import { STextarea } from "./Textarea.styled";

const Textarea = ({ fieldName }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors?.[fieldName];
  const hasError = !!fieldError;

  return (
    <STextarea id={fieldName} {...register(fieldName)} $error={hasError} />
  );
};

export default Textarea;
