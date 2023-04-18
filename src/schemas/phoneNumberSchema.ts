import * as yup from "yup";

export const phoneNumberSchema = yup.object({
  number: yup.string()
});
