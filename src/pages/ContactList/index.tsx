import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyledContactList } from "./style";
import { ContactCard, Contact } from "../Contact";

export const ContactList = () => {

  const [contacts, setContacts] = useState<Contact[]>([]);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleDelete = (id: string) => {
    console.log(id)
    axios.delete(`http://localhost:3000/contacts/${id}`)
      .then(r => console.log(r.status))
      .finally(() => window.location.reload());
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value.toUpperCase();
    setContacts(contacts.filter((contact: Contact) => contact.name.toUpperCase().startsWith(name)));
  }

  useEffect(() => {
    axios.get("http://localhost:3000/contacts")
      .then(({data})=> setContacts(data));
  }, [])

  return (
    <>
      <input type="text" onChange={handleSearch} placeholder="BUscar contato" />
      <StyledContactList>
        {letters.map(
          (letter, i) => (
            <div key={i}>
              <p>{letter}</p>
              {contacts.filter(contact => contact.name[0] == letter).map(({id, name, addresses, phoneNumbers}: Contact, i) => 
                <ContactCard id={id} name={name} addresses={addresses} phoneNumbers={phoneNumbers} handleDelete={handleDelete} key={i}/>
              )}
            </div>
          ))}
      </StyledContactList>
    </>
  )
}
