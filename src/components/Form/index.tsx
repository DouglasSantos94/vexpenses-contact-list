import React from "react";
import { FormProvider, UseFormProps, UseFormReturn } from "react-hook-form";
import { ContactAddressForm } from "../../pages/Contact/AddContact/AddressForm";
import { PhoneNumberForm } from "../../pages/Contact/AddContact/PhoneNumberForm";
import { NameInput } from "../../pages/Contact/AddContact";
import { Contact } from "../../types/contact";

export interface IFormProps {
  isEdit: boolean,
  form: UseFormReturn<Contact, UseFormProps>,
  submitForm: (form: Contact) => void
}

export const Form = ({isEdit, form, submitForm}: IFormProps) => {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(submitForm)}>
        <section>
          <NameInput />
        </section>
        <section>
          <h2>Endereços</h2>
          <ContactAddressForm />
        </section>
        <PhoneNumberForm />
        <button type="submit">{`Salvar ${isEdit ? "alterações" : "contato"}`}</button>
      </form>
    </FormProvider>
)
}