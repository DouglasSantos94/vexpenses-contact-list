import React from "react";
import { useForm, FormProvider, UseFormReturn, UseFormProps } from "react-hook-form";
import { Contact } from "..";
import { ContactAddressForm } from "../AddContact/AddressForm";
import { PhoneNumberForm } from "../AddContact/PhoneNumberForm";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const EditContact = () => {
  const location = useLocation();
  const {id, name, addresses, phoneNumbers} = location.state;

  const defaultValues = {id, name, addresses, phoneNumbers};
  const form: UseFormReturn<Contact, UseFormProps> = useForm<Contact>({
    defaultValues,
  });

  const submitForm = (form: Contact) => {
    axios.put(`http://localhost:3000/contacts/${id}`, {
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
