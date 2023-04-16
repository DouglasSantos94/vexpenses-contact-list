import React from "react";
import { Link } from "react-router-dom";
import * as C from "./style";
import { Address } from "../../types/address";
import { PhoneNumber } from "../../types/phoneNumber";

export interface IContactCardProps {
  id: string,
  name: string,
  addresses: Address[],
  phoneNumbers: PhoneNumber[],
  handleDelete: (id: string) => void
}

export const ContactCard = ({id, name, addresses, phoneNumbers, handleDelete}: IContactCardProps) => {
  return (
    <C.Card>
      <C.CardTitle>{name}</C.CardTitle>
      <C.ContactInfo>
        <p>Endereço {id}: {addresses[0].street}</p>
        <p>Telefone {id}: {phoneNumbers[0].number}</p>
      </C.ContactInfo>
      <Link to={`/contact/${id}`} state={{id, name, addresses, phoneNumbers}}>
        Ver contato
      </Link>
      <button onClick={() => handleDelete(id)}>Excluir</button>
    </C.Card>
  );
}