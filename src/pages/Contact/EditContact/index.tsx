import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm, UseFormReturn, UseFormProps } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "../../../components/Form";
import { Contact } from "../../../types/contact";
import { formSchema } from "../../../schemas/formSchema";
import { editContact } from "../../../api";

export const EditContact = () => {
  const location = useLocation();
  const {id, name, addresses, phoneNumbers} = location.state;
  const navigate = useNavigate();

  const defaultValues = {id, name, addresses, phoneNumbers};
  const form: UseFormReturn<Contact, UseFormProps> = useForm<Contact>({
    defaultValues,
    resolver: yupResolver(formSchema)
  });

  const submitForm = (form: Contact) => {
    editContact(form)
      .then(r => console.log(r.status))
      .finally(() => navigate("/"));
  }

  return (
    <Form form={form} submitForm={submitForm} isEdit />
  )
}
