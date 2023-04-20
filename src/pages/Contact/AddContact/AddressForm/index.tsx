import React from "react";
import { UseFieldArrayReturn, useFieldArray, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { viaCep } from "../../../../services/viaCep";
import { Contact } from "../../../../types/contact";
import { Address } from "../../../../types/address";
import { AddressesTitle, FormInput, InputField } from "../../../../components/Form/style";
import { AddressWrapper, CepButton, CepField, NewAddressButton, RemoveAddressButton } from "./style";


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
        form.setValue(`addresses.${index}.cep`, data.cep);
        form.setValue(`addresses.${index}.street`, data.logradouro);
        form.setValue(`addresses.${index}.neighborhood`, data.bairro);
        form.setValue(`addresses.${index}.city`, data.localidade);
        form.setValue(`addresses.${index}.state`, data.uf);
      });
  
  

  return (
    <AddressWrapper>
      {
        controlledFields.map((field, index) => (
          <div key={field.id}>
            <AddressesTitle>Endereço {index + 1}</AddressesTitle>
            <InputField style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <CepField>
                <FormInput {...form.register(`addresses.${index}.cep`, { required: "* Campo obrigatório" })} placeholder="CEP" />
                <ErrorMessage errors={form.formState.errors} name={`addresses.${index}.cep`} />
              </CepField>
              <CepButton type="button" onClick={() => getAddressApi(form.getValues(`addresses.${index}.cep`), index)}>Buscar endereço</CepButton>
            </InputField>
            <InputField>
              <FormInput {...form.register(`addresses.${index}.street`, { required: "* Campo obrigatório" })} placeholder="Rua" />
              <ErrorMessage errors={form.formState.errors} name={`addresses.${index}.street`} />
            </InputField>
            <InputField>
              <FormInput {...form.register(`addresses.${index}.number`, { required: "* Campo obrigatório" })} placeholder="Número" />
              <ErrorMessage errors={form.formState.errors} name={`addresses.${index}.number`} />
            </InputField>
            <InputField>
              <FormInput {...form.register(`addresses.${index}.complement`)} placeholder="Complemento" />
            </InputField>
            <InputField>
              <FormInput {...form.register(`addresses.${index}.neighborhood`, { required: "* Campo obrigatório" })} placeholder="Bairro" />
              <ErrorMessage errors={form.formState.errors} name={`addresses.${index}.neighborhood`} />
            </InputField>
            <InputField>
              <FormInput {...form.register(`addresses.${index}.city`, { required: "* Campo obrigatório" })} placeholder="Cidade" />
              <ErrorMessage errors={form.formState.errors} name={`addresses.${index}.city`} />
            </InputField>
            <InputField>
              <FormInput {...form.register(`addresses.${index}.state`, { required: "* Campo obrigatório" })} placeholder="Estado" />
              <ErrorMessage errors={form.formState.errors} name={`addresses.${index}.state`} />
            </InputField>
            {index > 0 && <RemoveAddressButton onClick={() => removeAddress(index)}>Remover endereço</RemoveAddressButton>}
          </div>
        ))
      }
      <NewAddressButton type="button" onClick={addNewAddress}>Novo endereço</NewAddressButton>
    </AddressWrapper>
  );
}
