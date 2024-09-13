import { useFormContext } from "react-hook-form";
import {
  SImageUploadWrapper,
  SImageInput,
  SImageWrapper,
} from "./ImageUpload.styled";
import PlusCircleIcon from "./../../../assets/plus-circle-icon.svg";
import { base64Image } from "../../../utils/helpers";

const ImageUpload = ({ fieldName }) => {
  const { setValue, setError, watch, clearErrors } = useFormContext();

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 1048576) {
      base64Image(file, (base64) => {
        setValue(fieldName, base64);
      });
      clearErrors(fieldName);
    } else {
      setError(fieldName, {
        type: "manual",
        message: "სურათის ზომა არ უნდა აღებმატებოდეს 1mb-ს",
      });
    }
  };

  const userImage = watch(fieldName);

  return (
    <SImageUploadWrapper>
      <SImageInput
        id={fieldName}
        type="file"
        accept="image/*"
        onChange={onFileChange}
      />

      {userImage ? (
        <SImageWrapper>
          <img src={`data:image/png;base64,${userImage}`} alt="Uploadedimage" />
        </SImageWrapper>
      ) : (
        <PlusCircleIcon />
      )}
    </SImageUploadWrapper>
  );
};

export default ImageUpload;
