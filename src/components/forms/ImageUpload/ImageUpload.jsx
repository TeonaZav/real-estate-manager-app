import { useState, useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import {
  SImageUploadWrapper,
  SImageInput,
  SImageWrapper,
  SDeleteButton,
} from "./ImageUpload.styled";
import { PlusCircleIcon, DeleteIcon } from "../../../assets";
import {
  dataURLtoFile,
  persistFormDataToSession,
} from "../../../utils/formUtils";

const ImageUpload = ({ fieldName, onChange, storageKey }) => {
  const [fileUrl, setFileUrl] = useState(null);
  const fileInputRef = useRef(null);
  const {
    formState: { errors },
    setError,
  } = useFormContext();

  const handleFileProcessing = (file) => {
    if (file.size > 1048576) {
      setError(fieldName, {
        type: "manual",
        message: "ფაილის ზომა არ უნდა აღემატებოდეს 1mb-ს",
      });
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setFileUrl(objectUrl);
    onChange(file);

    persistFormDataToSession({ [fieldName]: file }, storageKey, fieldName);
  };

  useEffect(() => {
    const storedData = JSON.parse(sessionStorage.getItem(storageKey) || "{}");
    const storedImage = storedData[fieldName];
    if (storedImage) {
      const file = dataURLtoFile(storedImage, "avatar-upload.jpg");
      file && handleFileProcessing(file);
    }
  }, [storageKey, fieldName]);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    file && handleFileProcessing(file);
  };

  const handleRemoveImage = () => {
    onChange(null);
    const sessionData = JSON.parse(sessionStorage.getItem(storageKey)) || {};
    delete sessionData[fieldName];
    sessionStorage.setItem(storageKey, JSON.stringify(sessionData));

    setFileUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <SImageUploadWrapper $hasError={errors?.[fieldName]}>
      <SImageInput
        ref={fileInputRef}
        id={fieldName}
        type="file"
        accept="image/*"
        onChange={onFileChange}
      />
      {fileUrl ? (
        <SImageWrapper>
          <img src={fileUrl} alt="Uploaded image" />
          <SDeleteButton onClick={handleRemoveImage}>
            <DeleteIcon />
          </SDeleteButton>
        </SImageWrapper>
      ) : (
        <PlusCircleIcon />
      )}
    </SImageUploadWrapper>
  );
};

export default ImageUpload;
