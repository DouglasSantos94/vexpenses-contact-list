import axios from "axios";
import { Contact } from "../types/contact";

const baseUrl = "http://localhost:3000";

const getContact = (id: string | undefined) => 
  axios.get(`${baseUrl}/contacts/${id}`)

const getContacts = () => 
  axios.get(`${baseUrl}/contacts`)

const createContact = (contact: Contact) => 
  axios.post(`${baseUrl}/contacts/`, {
    ...contact
  })

const editContact = (contact: Contact) => 
  axios.put(`${baseUrl}/contacts/${contact.id}`, {
    ...contact
  })

const deleteContact = (id: string) => 
  axios.delete(`${baseUrl}/contacts/${id}`)

export {
  getContact,
  getContacts,
  createContact,
  editContact,
  deleteContact
}
