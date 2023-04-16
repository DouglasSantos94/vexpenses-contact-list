import React from "react";
import { useForm, FormProvider, UseFormReturn, UseFormProps, useFormContext } from "react-hook-form";
import { Contact } from "..";
import { ContactAddressForm } from "./AddressForm";
import { PhoneNumberForm } from "./PhoneNumberForm";
import axios from "axios";
import { Form } from "../../../components/Form";

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
