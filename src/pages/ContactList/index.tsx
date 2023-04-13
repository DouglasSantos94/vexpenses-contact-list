import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyledContactList } from "./style";
import { Contact, IContactProps } from "../Contact";



export const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/contacts")
      .then(({data})=> setContacts(data));
  }, [])

  return (
    <StyledContactList>
      {contacts.map(({name, addresses, phoneNumbers}: IContactProps, i) => (
        <Contact name={name} addresses={addresses} phoneNumbers={phoneNumbers} key={i}/>
      ))}
    </StyledContactList>
  )
}
