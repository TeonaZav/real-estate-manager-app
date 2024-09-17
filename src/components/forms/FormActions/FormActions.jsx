import { ButtonGroup, Button } from "../../UI/Shared";

const FormActions = ({
  onCancel,
  submitLabel,
  cancelLabel = "გაუქმება",
}) => {
  return (
    <ButtonGroup>
      <Button
        $variant="outline"
        $colorType="primary"
        type="button"
        onClick={onCancel}
      >
        {cancelLabel}
      </Button>
      <Button $variant="solid" $colorType="primary" type="submit">
        {submitLabel}
      </Button>
    </ButtonGroup>
  );
};

export default FormActions;
