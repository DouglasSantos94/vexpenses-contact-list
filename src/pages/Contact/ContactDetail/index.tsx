import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { PhoneNumber } from "../../../types/phoneNumber";
import { Address } from "../../../types/address";
import axios from "axios";

export const ContactDetail = () => {
  const [ contact, setContact ] = useState({
    id: "",
    name: "",
    addresses: [],
    phoneNumbers: []
  });

  const { id } = useParams();

  const handleDelete = (id: string) => {
    axios.delete(`http://localhost:3000/contacts/${id}`)
      .then(r => console.log(r.status))
      .finally(() => window.location.reload());
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/contacts/${id}`)
      .then(({data}) => setContact(data))
  }, [id]);

  return (
    <>
      {
        contact && id && (
          <>
            <h1>Nome: {contact.name}</h1>
            <h2>Telefones:</h2>
            {contact.phoneNumbers.map((phoneNumber: PhoneNumber, i: number) => (
              <p key={i}>Telefone {i+1}: {phoneNumber.number}</p>
            ))}
            <h2>Endereços</h2>
            {contact.addresses.map((address: Address, i: number) => (
              <p key={i}>Endereço {i+1}: {address.street}</p>
            ))}
            <Link to={`/edit/${id}`}>Editar contato</Link>
            <button onClick={() => handleDelete(id)}>Excluir</button>
          </>
        )
      }
    </>
  )
}