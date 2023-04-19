import React from "react";
import { Link } from "react-router-dom";
import * as C from "./style";
import { Contact } from "../../types/contact";

export interface IContactCardProps {
  contact: Contact
}

export const ContactCard = ({ contact: { id, name , addresses, phoneNumbers} }: IContactCardProps) => {
  return (
    <C.Card>
      <C.CardTitle>{name}</C.CardTitle>
      <C.ContactInfo>
        <p>Endereço: {addresses[0].street}</p>
        <p>Telefone: {phoneNumbers[0].number}</p>
      </C.ContactInfo>
      <Link to={`/contact/${id}`}>
        Ver contato
      </Link>
    </C.Card>
  );
}