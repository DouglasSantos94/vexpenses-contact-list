import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { ContactList } from "../ContactList";
import { Contact } from "../Contact";
import { Link } from "react-router-dom";


export const Home = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/contacts")
      .then(({data})=> setContacts(data));
  }, [])

  const handleDelete = (id: string) => {
    console.log(id)
    axios.delete(`http://localhost:3000/contacts/${id}`)
      .then(r => console.log(r.status))
      .finally(() => window.location.reload());
  }

  return (
    <>
      <Link to="/add-contact">Novo contato</Link>
      <ContactList contacts={contacts && contacts} handleDelete={handleDelete} />
    </>
  )
}