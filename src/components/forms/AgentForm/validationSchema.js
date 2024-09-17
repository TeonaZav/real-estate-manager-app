import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("სავალდებულო")
    .min(2, "მინიმუმ ორი სიმბოლო")
    .matches(/^[ა-ჰa-zA-Z]+$/, "ჩაწერეთ ვალიდური მონაცემები"),
  surname: Yup.string()
    .required("სავალდებულო")
    .min(2, "მინიმუმ ორი სიმბოლო")
    .matches(/^[ა-ჰa-zA-Z]+$/, "ჩაწერეთ ვალიდური მონაცემები"),
  email: Yup.string()
    .required("სავალდებულო")
    .matches(
      /^[A-Z0-9._%+-]+@redberry\.ge$/i,
      "უნდა მთავრდებოდეს @redberry.ge-თ"
    ),
  avatar: Yup.mixed()
    .required("სავალდებულო")
    .test("fileFormat", "დასაშვებია მხოლოდ სურათის ტიპი", (value) => {
      return (
        value &&
        (typeof value === "string" ||
          ["image/jpeg", "image/png", "image/gif", "image/svg+xml"].includes(
            value.type
          ))
      );
    }),
  phone: Yup.string()
    .required("სავალდებულო")
    .matches(/^5\d{8}$/, "ფორმატი 5XXXXXXXX"),
});
