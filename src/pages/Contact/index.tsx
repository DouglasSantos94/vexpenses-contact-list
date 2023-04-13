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

export const Contact = () => {
  return (
    <C.Card>
      <C.CardTitle>Teste</C.CardTitle>
      <C.ContactInfo>
        <p>Nome: Teste</p>
        <p>Telefone: Teste</p>
      </C.ContactInfo>
    </C.Card>
  );
}