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

export interface IContactCardProps {
  id: string,
  name: string,
  addresses: Address[],
  phoneNumbers: string[],
  handleDelete: (id: string) => void
}

export const ContactCard = ({id, name, addresses, phoneNumbers, handleDelete}: IContactCardProps) => {
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
      <button onClick={() => handleDelete(id)}>Excluir</button>
    </C.Card>
  );
}