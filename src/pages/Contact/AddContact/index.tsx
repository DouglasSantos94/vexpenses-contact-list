import React from "react";
import { useForm, FormProvider, UseFormReturn, UseFormProps } from "react-hook-form";
import { Contact } from "..";
import { ContactAddressForm } from "./AddressForm";
import { PhoneNumberForm } from "./PhoneNumberForm";
import axios from "axios";

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
    {
      number: ""
    }
  ]
}

export const AddContact = () => {
  const form: UseFormReturn<Contact, UseFormProps> = useForm<Contact>({
    defaultValues,
  });

  const submitForm = (form: Contact) => {
    axios.post("http://localhost:3000/contacts/", {
      ...form
    })
      .then(r => console.log(r.status))
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(submitForm)}>
        <section>
          <h2>Endereços</h2>
          <ContactAddressForm />
        </section>
          <PhoneNumberForm />
        <button type="submit">Cadastrar contato</button>
      </form>
    </FormProvider>
  )
}
