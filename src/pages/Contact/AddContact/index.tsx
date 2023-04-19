import React from "react";
import { useForm, UseFormReturn, UseFormProps, useFormContext } from "react-hook-form";
import axios from "axios";
import { Form } from "../../../components/Form";
import { Contact } from "../../../types/contact";

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
    axios.post("http://localhost:3000/contacts/", {
      ...form
    })
      .then(r => console.log(r.status));
  }
  
  return (
    <Form form={form} isEdit={false} submitForm={submitForm} />
  )
}
