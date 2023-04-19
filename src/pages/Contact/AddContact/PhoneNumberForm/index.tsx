import React from "react";
import { UseFieldArrayReturn, useFieldArray, useFormContext } from "react-hook-form";
import { Contact } from "../../../../types/contact";


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
    <section>
      {
        phoneNumbersField.fields.map((field, index) => (
          <div key={field.id}>
            <p>Telefone {index + 1}</p>
            <button disabled={false} onClick={() => removePhoneNumber(index)}>Remover endereço</button>
            <div>
              <div>
                <input {...form.register(`phoneNumbers.${index}.number`)} placeholder="Telefone" />
              </div>
            </div>
          </div>
        ))
      }
      <button type="button" onClick={addNewPhoneNumber}>Novo Telefone</button>
    </section>
  );
}
