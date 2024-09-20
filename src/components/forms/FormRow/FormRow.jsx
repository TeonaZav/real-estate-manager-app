import { useFormContext } from "react-hook-form";
import { SFormRow, SMessage, SLabel } from "./FormRow.styled";
import { fadeInAnimationContfig } from "../../../utils/animationConfig";
import { isEmptyObject } from "../../../utils/helpers";
import CheckSvg from "./../../../assets/icons/check-icon.svg";

const FormRow = ({ label, children, fieldName, hintMessage = "" }) => {
  const {
    formState: { errors, dirtyFields, defaultValues, isValid },
    usingSessionData,
  } = useFormContext();

  const fieldError = errors?.[fieldName];
  const hasError = !!fieldError;
  const isDirty = dirtyFields[fieldName];

  const isValidField =
    (isDirty && !hasError) ||
    (usingSessionData &&
      defaultValues?.[fieldName] &&
      !hasError &&
      (!isEmptyObject(errors) || isValid));

  const message = fieldError?.message?.toString() || hintMessage;

  return (
    <SFormRow>
      <SLabel>
        {label} <span>*</span>
      </SLabel>
      {children}
      <SMessage
        {...fadeInAnimationContfig}
        $hasError={hasError}
        $isValid={isValidField}
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
