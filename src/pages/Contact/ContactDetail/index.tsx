import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Address, Contact, PhoneNumber } from "..";

export const ContactDetail = () => {
  const location = useLocation();
  const {id, name, addresses, phoneNumbers} = location.state;
  return (
    <>
      <h1>Nome: {name}</h1>
      <h2>Telefones:</h2>
      {phoneNumbers.map((phoneNumber: PhoneNumber, i: number) => (
        <p key={i}>Telefone {i+1}: {phoneNumber.number}</p>
      ))}
      <h2>Endereços</h2>
      {addresses.map((address: Address, i: number) => (
        <p key={i}>Endereço {i+1}: {address.street}</p>
      ))}
    </>
  )
}