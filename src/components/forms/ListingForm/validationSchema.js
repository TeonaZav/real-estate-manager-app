import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  address: Yup.string().required("სავალდებულო").min(2, "მინიმუმ 2 სიმბოლო"),

  image: Yup.mixed()
    .required("სავალდებულო")
    .test("fileFormat", "დასაშვებია მხოლოდ სურათის ტიპი", (value) => {
      return (
        value &&
        (typeof value === "string" ||
          [
            "image/jpeg",
            "image/png",
            "image/gif",
            "image/svg+xml",
            "image/webp",
          ].includes(value.type))
      );
    }),
  region_id: Yup.string().required("სავალდებულო"),
  city_id: Yup.string().required("სავალდებულო"),

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
    .matches(/^[0-9]+$/, "მხოლოდ რიცხვები"),

  price: Yup.number()
    .nullable()
    .transform((value, originalValue) =>
      String(originalValue).trim() === "" ? null : value
    )
    .required("სავალდებულო")
    .typeError("მხოლოდ რიცხვები"),

  area: Yup.number()
    .nullable()
    .transform((value, originalValue) =>
      String(originalValue).trim() === "" ? null : value
    )
    .required("სავალდებულო")
    .typeError("მხოლოდ რიცხვები"),

  bedrooms: Yup.number()
    .nullable()
    .transform((value, originalValue) =>
      String(originalValue).trim() === "" ? null : value
    )
    .required("სავალდებულო")
    .typeError("მხოლოდ რიცხვები")
    .integer("ჩაწერეთ მთელი რიცხვი"),

  is_rental: Yup.number().required("სავალდებულო"),
  agent_id: Yup.string().required("სავალდებულო"),
});
