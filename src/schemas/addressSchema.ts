import * as yup from "yup";

export const addressSchema = yup.object({
  cep: yup.string().min(8).max(8).required(),
  street: yup.string().max(100).required(),
  number: yup.string().max(20).required(),
  complement: yup.string().max(100),
  neighborhood: yup.string().max(100).required(),
  city: yup.string().max(100).required(),
  state: yup.string().max(100).required(),
});
