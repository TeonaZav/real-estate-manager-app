export const formConfig = {
  is_rental: {
    label: "გარიგების ტიპი",
    type: "radio",
    fieldName: "is_rental",
    options: [
      { value: "0", label: "იყიდება", defaultChecked: true },
      { value: "1", label: "ქირავდება" },
    ],
  },
  address: {
    label: "მისამართი",
    type: "text",
    placeholder: "მინიმუმ ორი სიმბოლო",
    hintMessage: "მინიმუმ ორი სიმბოლო",
    fieldName: "address",
  },
  zip_code: {
    label: "საფოსტო ინდექსი",
    type: "text",
    placeholder: "მხოლოდ რიცხვები",
    hintMessage: "მხოლოდ რიცხვები",
    fieldName: "zip_code",
  },
  region_id: {
    label: "რეგიონი",
    type: "select",
    variant: "select",
    fieldName: "region_id",
  },
  city_id: {
    label: "ქალაქი",
    type: "select",
    variant: "select",
    fieldName: "city_id",
  },
  price: {
    label: "ფასი",
    type: "number",
    hintMessage: "მხოლოდ რიცხვები",
    fieldName: "price",
  },
  area: {
    label: "ფართობი",
    type: "number",
    hintMessage: "მხოლოდ რიცხვები",
    fieldName: "area",
  },
  bedrooms: {
    label: "საძინებლების რაოდენობა",
    type: "number",
    hintMessage: "მხოლოდ რიცხვები",
    fieldName: "bedrooms",
  },
  description: {
    label: "აღწერა",
    type: "textarea",
    hintMessage: "მინიმუმ ხუთი სიტყვა",
    fieldName: "description",
  },
  image: {
    label: "ატვირთეთ ფოტო",
    type: "image",
    fieldName: "image",
  },
  agent_id: {
    label: "აირჩიე",
    type: "select",
    fieldName: "agent_id",
  },
};

export const defaultValues = {
  address: "",
  image: null,
  region_id: null,
  description: "",
  city_id: null,
  zip_code: "",
  price: null,
  area: null,
  bedrooms: null,
  is_rental: "0",
  agent_id: null,
};
