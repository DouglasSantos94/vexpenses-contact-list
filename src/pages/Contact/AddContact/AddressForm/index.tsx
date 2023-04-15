import React from "react";
import { UseFieldArrayReturn, useFieldArray, useFormContext } from "react-hook-form";
import { Contact } from "../..";


export const ContactAddressForm = () => {
  const form = useFormContext<Contact>();
  const addressesField: UseFieldArrayReturn<Contact> = 
    useFieldArray<Contact>({
      control: form.control,
      name: "addresses"
    })

  const addNewAddress = () => {
    addressesField.append({
      cep: "",
      street: "",
      neighborhood: "",
      city: "",
      state: "",
    })
  }

  const removeAddress = (index: number) => {
    if(addressesField.fields.length === 1) return;

    addressesField.remove(index);
  }

  return (
    <section>
      {
        addressesField.fields.map((field, index) => (
          <div key={field.id}>
            <p>Endereço {index + 1}</p>
            <button disabled={false} onClick={() => removeAddress(index)}>Remover endereço</button>
            <div>
              <div>
                <input {...form.register(`addresses.${index}.cep`)} placeholder="CEP" />
              </div>
              <div>
                <input {...form.register(`addresses.${index}.street`)} placeholder="Rua" />
              </div>
              <div>
                <input {...form.register(`addresses.${index}.neighborhood`)} placeholder="Bairro" />
              </div>
              <div>
                <input {...form.register(`addresses.${index}.city`)} placeholder="Cidade" />
              </div>
              <div>
                <input {...form.register(`addresses.${index}.state`)} placeholder="Estado" />
              </div>
            </div>
          </div>
        ))
      }
      <button type="button" onClick={addNewAddress}>Novo endereço</button>
    </section>
  );
}
