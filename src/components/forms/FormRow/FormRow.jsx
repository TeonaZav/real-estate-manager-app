import { useFormContext } from "react-hook-form";
import { SFormRow, SMessage, SLabel } from "./FormRow.styled";
import CheckSvg from "./../../../assets/check-icon.svg";
import { fadeInAnimationContfig } from "../../../utils/animationConfig";

const FormRow = ({
  label,
  children,
  fieldName,
  hintMessage = "",
  variant = "input",
}) => {
  const {
    formState: { errors, dirtyFields },
  } = useFormContext();
  const fieldError = errors?.[fieldName];
  const hasError = !!errors?.[fieldName];

  const isDirty = !!dirtyFields[fieldName];
  const isSuccess = isDirty && !hasError;

  const message = fieldError?.message?.toString() || hintMessage;
  return (
    <SFormRow>
      <SLabel>{label}</SLabel>
      {children}
      <SMessage
        {...fadeInAnimationContfig}
        $hasError={hasError}
        $isSuccess={isSuccess}
      >
        {message && (
          <>
            <CheckSvg /> {message}
          </>
        )}
      </SMessage>
    </SFormRow>
  );
};

export default FormRow;
