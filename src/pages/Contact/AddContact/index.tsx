import React from "react";
import { useForm, FormProvider, UseFormReturn, UseFormProps } from "react-hook-form";
import { Contact } from "..";
import { ContactAddressForm } from "./AddressForm";

const defaultValues: Contact = {
  id: "",
  name: "",
  addresses: [
    {
      cep: "",
      state: "",
      city: "",
      neighborhood: "",
      street: "",
    }
  ],
  phoneNumbers: [
    ""
  ]
}

export const AddContact = () => {
  const form: UseFormReturn<Contact, UseFormProps> = useForm<Contact>({
    defaultValues,
  });

  const submitForm = (form: Contact) => {
    console.log(form)
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(submitForm)}>
        <section>
          <h2>Endereços</h2>
          <ContactAddressForm />
        </section>
        <button type="submit">Cadastrar contato</button>
      </form>
    </FormProvider>
  )
}
