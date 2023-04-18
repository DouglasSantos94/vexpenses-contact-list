import * as yup from "yup";

import { Contact } from "../types/contact";
import { PhoneNumber } from "../types/phoneNumber";
import { addressSchema } from "./addressSchema";
import { phoneNumberSchema } from "./phoneNumberSchema";

export interface FormShape {
  name: string,
  addresses: Contact[],
  phoneNumbers: PhoneNumber[]
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - override correct yup type
export const formSchema: yup.SchemaOf<FormShape> = yup.object({
  name: yup.string().max(100).required(),
  addresses: yup
    .array()
    .of(
      addressSchema
    ).required(),
  phoneNumbers: yup.array().of(
    phoneNumberSchema
  )
});
