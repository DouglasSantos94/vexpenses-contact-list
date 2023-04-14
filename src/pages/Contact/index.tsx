import React from "react";
import * as C from "./style";
import { Link } from "react-router-dom";

export type Address = {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service: string;
}

export type Contact = {
  id: string
  name: string,
  addresses: Address[],
  phoneNumbers: string[]
}

export interface IContactProps {
  id: string,
  name: string,
  addresses: Address[],
  phoneNumbers: string[]
}

export const ContactCard = ({id, name, addresses, phoneNumbers}: IContactProps) => {
  return (
    <C.Card>
      <C.CardTitle>{name}</C.CardTitle>
      <C.ContactInfo>
        <p>Endereço {id}: {addresses[0].street}</p>
        <p>Telefone {id}: {phoneNumbers[0]}</p>
      </C.ContactInfo>
      <Link to={`/contact/${id}`} state={{id, name, addresses, phoneNumbers}}>
        Ver contato
      </Link>
    </C.Card>
  );
}