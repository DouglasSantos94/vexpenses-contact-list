import React from "react";
import { StyledContactList } from "./style";
import { Contact, IContactProps } from "../Contact";

const contacts = [
  {
    name: "Contact 1",
    addresses: [
      {
        "cep": "89010025",
        "state": "SC",
        "city": "Blumenau",
        "neighborhood": "Centro",
        "street": "Rua Doutor Luiz de Freitas Melro",
        "service": "viacep"
      }
    ],
    phoneNumbers: [
      "8888888"
    ]
  }
];

export const ContactList = () => {
  return (
    <StyledContactList>
      {contacts.map(({name, addresses, phoneNumbers}: IContactProps, i) => (
        <Contact name={name} addresses={addresses} phoneNumbers={phoneNumbers} key={i}/>
      ))}
    </StyledContactList>
  )
}