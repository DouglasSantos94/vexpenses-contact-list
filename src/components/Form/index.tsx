import React from "react";
import { FormProvider, UseFormProps, UseFormReturn } from "react-hook-form";
import { ContactAddressForm } from "../../pages/Contact/AddContact/AddressForm";
import { PhoneNumberForm } from "../../pages/Contact/AddContact/PhoneNumberForm";
import { Contact } from "../../types/contact";
import { FormInput, InputField, StyledForm } from "./style";
import { ErrorMessage } from "@hookform/error-message";

export interface IFormProps {
  isEdit: boolean,
  form: UseFormReturn<Contact, UseFormProps>,
  submitForm: (form: Contact) => void
}

export const Form = ({isEdit, form, submitForm}: IFormProps) => {
  return (
    <FormProvider {...form}>
      <StyledForm onSubmit={form.handleSubmit(submitForm)}>
        <InputField>
          <label htmlFor="name">Nome</label>
          <FormInput {...form.register("name", { required: "* Campo obrigatório" })} />
          <ErrorMessage errors={form.formState.errors} name="name"/>
        </InputField>
        <section>
          <h2>Endereços</h2>
          <ContactAddressForm />
        </section>
        <PhoneNumberForm />
        <button type="submit">{`Salvar ${isEdit ? "alterações" : "contato"}`}</button>
      </StyledForm>
    </FormProvider>
)
}