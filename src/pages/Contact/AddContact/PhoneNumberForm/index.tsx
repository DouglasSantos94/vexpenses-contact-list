import React from "react";
import { UseFieldArrayReturn, useFieldArray, useFormContext } from "react-hook-form";
import { Contact } from "../../../../types/contact";
import { ErrorMessage } from "@hookform/error-message";
import { FormInput } from "../../../../components/Form/style";
import { NewPhoneNumberButtonButton, PhoneNumberWrapper } from "./style";


export const PhoneNumberForm = () => {
  const form = useFormContext<Contact>();
  const phoneNumbersField: UseFieldArrayReturn<Contact> = 
    useFieldArray<Contact>({
      control: form.control,
      name: "phoneNumbers"
    })

  const addNewPhoneNumber = () => {
    phoneNumbersField.append({
      number: ""
    });
  }

  const removePhoneNumber = (index: number) => {
    if(phoneNumbersField.fields.length === 1) return;

    phoneNumbersField.remove(index);
  }

  return (
    <PhoneNumberWrapper>
      {
        phoneNumbersField.fields.map((field, index) => (
          <div key={field.id}>
            <p>Telefone {index + 1}</p>
            <div>
              <FormInput {...form.register(`phoneNumbers.${index}.number`, { required: "* Campo obrigatório" })} placeholder="Telefone" />
              <ErrorMessage errors={form.formState.errors} name={`addresses.${index}.state`} />
            </div>
            <button disabled={false} onClick={() => removePhoneNumber(index)}>Remover telefone</button>
          </div>
        ))
      }
      <NewPhoneNumberButtonButton type="button" onClick={addNewPhoneNumber}>Novo Telefone</NewPhoneNumberButtonButton>
    </PhoneNumberWrapper>
  );
}
