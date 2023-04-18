import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useForm, UseFormReturn, UseFormProps } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "../../../components/Form";
import { Contact } from "../../../types/contact";
import { formSchema } from "../../../schemas/formSchema";

export const EditContact = () => {
  const location = useLocation();
  const {id, name, addresses, phoneNumbers} = location.state;

  const defaultValues = {id, name, addresses, phoneNumbers};
  const form: UseFormReturn<Contact, UseFormProps> = useForm<Contact>({
    defaultValues,
    resolver: yupResolver(formSchema)
  });

  const submitForm = (form: Contact) => {
    axios.put(`http://localhost:3000/contacts/${id}`, {
      ...form
    })
      .then(r => console.log(r.status))
  }

  

  return (
    <Form form={form} submitForm={submitForm} isEdit />
  )
}
