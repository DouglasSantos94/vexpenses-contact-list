import React, { useEffect, useState } from "react";
import axios from "axios";
import { ContactList } from "../ContactList";


export const Home = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/contacts")
      .then(({data})=> setContacts(data));
  }, [])

  return (
    <ContactList contacts={contacts} />
  )
}