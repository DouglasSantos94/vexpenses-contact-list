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

export interface IContactProps {
  name: string,
  addresses: Address[],
  phoneNumbers: string[]
}

export const Contact = ({name, addresses, phoneNumbers}: IContactProps) => {
  return (
    <C.Card>
      <C.CardTitle>{name}</C.CardTitle>
      <C.ContactInfo>
        {addresses.map((address, i) => (
          <p key={i}>Endereço : {address.street}</p>
        ))}
        {phoneNumbers.map((phoneNumber, i) => (
          <p key={i}>Endereço : {phoneNumber}</p>
        ))}
      </C.ContactInfo>
    </C.Card>
  );
}