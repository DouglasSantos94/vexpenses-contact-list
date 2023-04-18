import React from "react";
import { UseFieldArrayReturn, useFieldArray, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { viaCep } from "../../../../services/viaCep";
import { Contact } from "../../../../types/contact";
import { Address } from "../../../../types/address";

export const ContactAddressForm = () => {
  const form = useFormContext<Contact>();
  const addressesField: UseFieldArrayReturn<Contact> = 
    useFieldArray<Contact>({
      control: form.control,
      name: "addresses",
    });

  const watchFieldArray = form.watch("addresses");

  const controlledFields = addressesField.fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index]
    }
  });

  const addNewAddress = () => {
    console.log(form.formState)
    addressesField.append({
      cep: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
    } as Address)
  }

  const removeAddress = (index: number) => {
    if(addressesField.fields.length === 1) return;

    addressesField.remove(index);
  }

  const getAddressApi = (cep: string | null | undefined, index: number) => 
    viaCep(cep)
      .then(({data}) => {
        form.setValue(`addresses.${index}.street`, data.logradouro);
        form.setValue(`addresses.${index}.neighborhood`, data.bairro);
        form.setValue(`addresses.${index}.neighborhood`, data.bairro);
        form.setValue(`addresses.${index}.city`, data.localidade);
        form.setValue(`addresses.${index}.state`, data.uf);
      });
  
  

  return (
    <section>
      {
        controlledFields.map((field, index) => (
          <div key={field.id}>
            <p>Endereço {index + 1}</p>
            <button disabled={false} onClick={() => removeAddress(index)}>Remover endereço</button>
            <div>
              <div>
                <input {...form.register(`addresses.${index}.cep`)} placeholder="CEP" />
                <button type="button" onClick={() => getAddressApi(form.getValues(`addresses.${index}.cep`), index)}>Buscar endereço</button>
              </div>
              <div>
                <input {...form.register(`addresses.${index}.street`, { required: "Obrigatório" })} placeholder="Rua" />
                <ErrorMessage errors={form.formState.errors} name={`addresses.${index}.street`} />
              </div>
              <div>
                <input {...form.register(`addresses.${index}.number`)} placeholder="Número" />
              </div>
              <div>
                <input {...form.register(`addresses.${index}.complement`)} placeholder="Complemento" />
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
