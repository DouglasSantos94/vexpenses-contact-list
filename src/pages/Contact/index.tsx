import React from "react";
import * as C from "./style";

export type Address = {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service: string;
}

export type Contact = {
  name: string,
  addresses: Address[],
  phoneNumbers: string[]
}

export interface IContactProps {
  name: string,
  addresses: Address[],
  phoneNumbers: string[]
}

export const ContactCard = ({name, addresses, phoneNumbers}: IContactProps) => {
  return (
    <C.Card>
      <C.CardTitle>{name}</C.CardTitle>
      <C.ContactInfo>
        {addresses.map((address, i) => (
          <p key={i}>Endereço {i+1}: {address.street}</p>
        ))}
        {phoneNumbers.map((phoneNumber, i) => (
          <p key={i}>Telefone {i+1} : {phoneNumber}</p>
        ))}
      </C.ContactInfo>
    </C.Card>
  );
}