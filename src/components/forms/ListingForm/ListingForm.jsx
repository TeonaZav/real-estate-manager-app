import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validationSchema";
import { useCreateListing } from "../../../hooks/useCreateListing";
import { useGetAgents } from "../../../hooks/useGetAgents";
import { useAddressData } from "../../../hooks/useAddressData";
import { useFilter } from "./../../../context/FilterContext";
import { DevTool } from "@hookform/devtools";
import FormActions from "../FormActions/FormActions";
import {
  FormRow,
  Input,
  SelectField,
  Textarea,
  RadioGroup,
  ImageUpload,
} from "./../index";
import { Heading } from "../../UI/Shared";
import {
  SFormWrapper,
  SForm,
  SFormFields,
  SGroupLabel,
  SFieldsContainer,
} from "./ListingForm.styled";
import { SFieldsGrid } from "../formShared.style";
import AgentForm from "../AgentForm/AgentForm";
import {
  getSessionData,
  persistFormDataToSession,
  convertSelectOptions,
} from "../../../utils/formUtils";

import { formConfig, defaultValues } from "./formConfig";

const STORAGE_KEY = "listing-form-data";

const ListingForm = () => {
  const navigate = useNavigate();

  const { clearFilters } = useFilter();

  const handleClearFilters = () => {
    sessionStorage.removeItem("filterURL");
    clearFilters();
  };
  const { createNewListing } = useCreateListing();

  const sessionData = getSessionData(STORAGE_KEY);
  const formValues = sessionData || defaultValues;

  const methods = useForm({
    defaultValues: formValues,
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const { handleSubmit, control, watch, reset, getValues } = methods;
  const region_id = watch("region_id");

  const { agents } = useGetAgents();
  const { cities, regions } = useAddressData();

  useEffect(() => {
    const subscription = watch((values) =>
      persistFormDataToSession(values, STORAGE_KEY, "image")
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  const handleReset = () => {
    reset(defaultValues);
    sessionStorage.removeItem(STORAGE_KEY);
    handleClearFilters();
    navigate("/");
  };

  const onSubmit = (data, event) => {
    event.preventDefault();
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    createNewListing(formData, {
      onSuccess: () => {
        handleReset();
      },
    });
  };
  const onError = (errors) => console.log(getValues());

  const filteredCities = useMemo(() => {
    return convertSelectOptions(
      region_id
        ? cities.filter((city) => String(city.region_id) === String(region_id))
        : []
    );
  }, [region_id, cities]);

  return (
    <SFormWrapper>
      <FormProvider {...methods} usingSessionData={sessionData ? true : false}>
        <Heading>ლისტინგის დამატება</Heading>
        <SForm onSubmit={handleSubmit(onSubmit, onError)}>
          <SFormFields>
            <SFieldsContainer $radio>
              <SGroupLabel>ᲒᲐᲠᲘᲒᲔᲑᲘᲡ ᲢᲘᲞᲘ</SGroupLabel>
              <SFieldsGrid>
                <RadioGroup {...formConfig["is_rental"]} />
              </SFieldsGrid>
            </SFieldsContainer>

            <SFieldsContainer>
              <SGroupLabel>ᲛᲓᲔᲑᲐᲠᲔᲝᲑᲐ</SGroupLabel>
              <SFieldsGrid>
                <FormRow {...formConfig["address"]} fieldName="address">
                  <Input fieldName="address" />
                </FormRow>
                <FormRow {...formConfig["zip_code"]}>
                  <Input fieldName="zip_code" />
                </FormRow>
                <FormRow {...formConfig["region_id"]}>
                  <SelectField options={regions} fieldName="region_id" />
                </FormRow>
                {region_id && (
                  <FormRow {...formConfig["city_id"]}>
                    <SelectField options={filteredCities} fieldName="city_id" />
                  </FormRow>
                )}
              </SFieldsGrid>
            </SFieldsContainer>

            <SFieldsContainer>
              <SGroupLabel>ᲑᲘᲜᲘᲡ ᲓᲔᲢᲐᲚᲔᲑᲘ</SGroupLabel>
              <SFieldsGrid>
                <FormRow {...formConfig["price"]}>
                  <Input fieldName="price" />
                </FormRow>
                <FormRow {...formConfig["area"]}>
                  <Input fieldName="area" />
                </FormRow>
                <FormRow {...formConfig["bedrooms"]}>
                  <Input fieldName="bedrooms" />
                </FormRow>
              </SFieldsGrid>
              <FormRow {...formConfig["description"]}>
                <Textarea fieldName="description" />
              </FormRow>
              <FormRow {...formConfig["image"]}>
                <Controller
                  name="image"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <ImageUpload
                      fieldName="image"
                      onChange={onChange}
                      value={value}
                      storageKey={STORAGE_KEY}
                    />
                  )}
                />
              </FormRow>
            </SFieldsContainer>

            <SFieldsContainer $radio>
              <SGroupLabel>ᲐᲒᲔᲜᲢᲘ</SGroupLabel>
              <SFieldsGrid>
                <FormRow {...formConfig["agent_id"]}>
                  <SelectField
                    options={agents || []}
                    fieldName="agent_id"
                    useCustomMenu={true}
                    customModalContent={(props) => <AgentForm {...props} />}
                  />
                </FormRow>
              </SFieldsGrid>
            </SFieldsContainer>
          </SFormFields>
          <FormActions onCancel={handleReset} submitLabel="დამატე ლისტინგი" />
        </SForm>
      </FormProvider>
      <DevTool control={control} />
    </SFormWrapper>
  );
};

export default ListingForm;
