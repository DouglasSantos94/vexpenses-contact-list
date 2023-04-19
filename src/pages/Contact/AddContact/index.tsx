import React from "react";
import { useForm, UseFormReturn, UseFormProps, useFormContext } from "react-hook-form";
import { Form } from "../../../components/Form";
import { Contact } from "../../../types/contact";
import { createContact } from "../../../api";

const defaultValues: Contact = {
  id: "",
  name: "",
  addresses: [
    {
      cep: "",
      state: "",
      city: "",
      neighborhood: "",
      complement: "",
      number: "",
      street: "",
    }
  ],
  phoneNumbers: [
    {
      number: ""
    }
  ]
}

export const NameInput = () => {
  const { register } = useFormContext();
  return <input {...register("name")} />
}
 
export const AddContact = () => {
  const form: UseFormReturn<Contact, UseFormProps> = useForm<Contact>({
    defaultValues,
  });

  const submitForm = (form: Contact) => {
    createContact(form)
      .then(r => r.status)
      .catch(e => console.log(e));
  }
  
  return (
    <Form form={form} isEdit={false} submitForm={submitForm} />
  )
}
