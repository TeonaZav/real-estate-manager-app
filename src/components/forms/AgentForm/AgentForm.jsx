import { useEffect } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";

import { useCreateAgent } from "../../../hooks/useCreateAgent";
import { validationSchema } from "./validationSchema";
import { FormRow, Input, ImageUpload } from "../index";
import { SFormWrapper, SForm } from "./AgentForm.styled";
import { SFieldsGrid } from "../formShared.style";
import { Heading, ButtonGroup, Button } from "../../UI/Shared";
import {
  getSessionData,
  persistFormDataToSession,
} from "../../../utils/formUtils";

const STORAGE_KEY = "agent-form-data";

const AgentForm = ({ onClose }) => {
  const { createNewAgent } = useCreateAgent();

  const sessionData = getSessionData(STORAGE_KEY);

  const defaultValues = {
    name: "",
    surname: "",
    email: "",
    avatar: null,
    phone: null,
  };

  const formValues = sessionData || defaultValues;

  const methods = useForm({
    defaultValues: formValues,
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const { handleSubmit, control, watch, reset, getValues } = methods;

  useEffect(() => {
    const subscription = watch((values) => {
      persistFormDataToSession(values, STORAGE_KEY, "avatar");
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const handleCancel = () => {
    reset(defaultValues);
    sessionStorage.removeItem(STORAGE_KEY);
    onClose();
  };

  const onSubmit = (data, event) => {
    event.preventDefault();
    event.stopPropagation();

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    createNewAgent(formData, {
      onSuccess: () => {
        sessionStorage.removeItem(STORAGE_KEY);
        reset(defaultValues);

        setTimeout(() => {
          onClose();
        }, 2000);
      },
    });
  };

  const onError = (errors) => {
    console.log(errors);
    console.log(getValues());
  };

  return (
    <SFormWrapper>
      <FormProvider {...methods}>
        <Heading>აგენტის დამატება</Heading>
        <SForm onSubmit={handleSubmit(onSubmit, onError)}>
          <SFieldsGrid>
            <FormRow
              label="სახელი"
              fieldName="name"
              hintMessage="მინიმუმ ორი სიმბოლო"
            >
              <Input fieldName="name" />
            </FormRow>
            <FormRow
              label="გვარი"
              fieldName="surname"
              hintMessage="მინიმუმ ორი სიმბოლო"
            >
              <Input fieldName="surname" />
            </FormRow>

            <FormRow
              label="ელ-ფოსტა"
              fieldName="email"
              hintMessage="გამოიყენეთ @redberry.ge ფოსტა"
            >
              <Input fieldName="email" />
            </FormRow>
            <FormRow
              label="ტელეფონის ნომერი"
              fieldName="phone"
              hintMessage="მხოლოდ რიცხვები"
            >
              <Input fieldName="phone" />
            </FormRow>
          </SFieldsGrid>

          <FormRow label="ატვირთეთ ფოტო" fieldName="avatar">
            <Controller
              name="avatar"
              control={control}
              render={({ field: { onChange, value } }) => (
                <ImageUpload
                  fieldName="avatar"
                  onChange={onChange}
                  value={value}
                  storageKey={STORAGE_KEY}
                />
              )}
            />
          </FormRow>
          <ButtonGroup>
            <Button
              type="button"
              $variant="outline"
              $colorType="primary"
              onClick={handleCancel}
            >
              გაუქმება
            </Button>
            <Button $variant="solid" $colorType="primary" type="submit">
              დაამატე აგენტი
            </Button>
          </ButtonGroup>
        </SForm>
      </FormProvider>
      <DevTool control={control} />
    </SFormWrapper>
  );
};

export default AgentForm;
