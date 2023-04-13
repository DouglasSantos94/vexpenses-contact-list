import React from "react";
import { StyledContactList } from "./style";
import { ContactCard, Contact, IContactProps } from "../Contact";

export interface IContactListProps {
  contacts: Contact[]
}

export const ContactList: React.FC<IContactListProps> = ({contacts}: IContactListProps) => {

  return (
    <StyledContactList>
      {contacts.map(({name, addresses, phoneNumbers}: IContactProps, i) => (
        <ContactCard name={name} addresses={addresses} phoneNumbers={phoneNumbers} key={i}/>
      ))}
    </StyledContactList>
  )
}
