import React from "react";
import { StyledContactList } from "./style";
import { ContactCard, Contact } from "../Contact";

export interface IContactListProps {
  contacts: Contact[],
  handleDelete: (id: string) => void
}

export const ContactList: React.FC<IContactListProps> = ({contacts, handleDelete}: IContactListProps) => {
  console.log(contacts)
  return (
    <StyledContactList>
      {contacts.map(({id, name, addresses, phoneNumbers}: Contact, i) => (
        <ContactCard id={id} name={name} addresses={addresses} phoneNumbers={phoneNumbers} handleDelete={handleDelete} key={i}/>
      ))}
    </StyledContactList>
  )
}
