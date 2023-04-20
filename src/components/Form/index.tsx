import React from "react";
import { FormProvider, UseFormProps, UseFormReturn } from "react-hook-form";
import { ContactAddressForm } from "../../pages/Contact/AddContact/AddressForm";
import { PhoneNumberForm } from "../../pages/Contact/AddContact/PhoneNumberForm";
import { Contact } from "../../types/contact";
import { FormInput, Label, SaveContactButton, SectionTitle, StyledForm } from "./style";
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
        <Label htmlFor="name">Nome</Label>
        <FormInput style={{width: "60%"}} {...form.register("name", { required: "* Campo obrigatório" })} />
        <ErrorMessage errors={form.formState.errors} name="name"/>
        <SectionTitle>Endereços</SectionTitle>
        <ContactAddressForm />
        <SectionTitle>Telefones</SectionTitle>
        <PhoneNumberForm />
        <SaveContactButton type="submit">{`Salvar ${isEdit ? "alterações" : "contato"}`}</SaveContactButton>
      </StyledForm>
    </FormProvider>
)
}