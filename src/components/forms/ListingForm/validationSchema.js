import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  address: Yup.string()
    .required("სავალდებულო")
    .min(2, "მინიმუმ ორი სიმბოლო")
    .matches(/^(?!\d+$)/, "ჩაწერეთ ვალიდური მონაცემები"),

  image: Yup.mixed()
    .required("სავალდებულო")
    .test("fileFormat", "დასაშვებია მხოლოდ სურათის ტიპი", (value) => {
      return (
        value &&
        (typeof value === "string" ||
          ["image/jpeg", "image/png", "image/gif"].includes(value.type))
      );
    }),
  region_id: Yup.string()
    .required("სავალდებულო")
    .matches(/^[0-9]+$/, "ჩაწერეთ ვალიდური მონაცემები"),

  city_id: Yup.string()
    .required("სავალდებულო")
    .matches(/^[0-9]+$/, "ჩაწერეთ ვალიდური მონაცემები"),

  description: Yup.string()
    .required("სავალდებულო")
    .test(
      "minWords",
      "მინიმუმ ხუთი სიტყვა",
      (value) =>
        value && value.split(" ").filter((word) => word.length > 0).length >= 5
    ),

  zip_code: Yup.string()
    .required("სავალდებულო")
    .matches(/^[0-9]+$/, "ჩაწერეთ ვალიდური მონაცემები"),

  price: Yup.number().typeError("მხოლოდ რიცხვები").required("სავალდებულო"),

  area: Yup.number().typeError("მხოლოდ რიცხვები").required("სავალდებულო"),

  bedrooms: Yup.number()
    .required("სავალდებულო")
    .typeError("მხოლოდ რიცხვები")
    .integer("ჩაწერეთ ვალიდური მონაცემები"),

  is_rental: Yup.number().required("სავალდებულო"),

  agent_id: Yup.string()
    .required("სავალდებულო")
    .matches(/^[0-9]+$/, "ჩაწერეთ ვალიდური მონაცემები"),
});
