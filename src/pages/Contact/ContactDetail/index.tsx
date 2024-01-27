import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PhoneNumber } from "../../../types/phoneNumber";
import { Address } from "../../../types/address";
import { deleteContact, getContact } from "../../../api";
import {
  ContactDetailCard,
  ContactDetailName,
  ContactDetailSection,
  ContactDetailWrapper,
  ContactDetailInfo,
  ContactDetailButtons,
  EditContact,
  DeleteContact,
} from "./style";

export const ContactDetail = () => {
  const [contact, setContact] = useState({
    id: "",
    name: "",
    addresses: [],
    phoneNumbers: [],
  });

  const { id } = useParams();

  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    deleteContact(id)
      .then((r) => r.status)
      .catch((status) => console.log(status))
      .finally(() => navigate("/"));
  };
  console.log(contact);

  useEffect(() => {
    getContact(id)
      .then(({ data }) => setContact(data))
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <ContactDetailWrapper>
      {contact && id && (
        <ContactDetailCard>
          <ContactDetailInfo>
            <ContactDetailName>{contact.name}</ContactDetailName>
            <ContactDetailSection>
              <h2>Telefones</h2>
              {contact.phoneNumbers.map(
                (phoneNumber: PhoneNumber, i: number) => (
                  <p key={i}>
                    Telefone {i + 1}: {phoneNumber.number}
                  </p>
                )
              )}
            </ContactDetailSection>
            <ContactDetailSection>
              <h2>Endereços</h2>
              {contact.addresses.map((address: Address, i: number) => (
                <p key={i}>
                  Endereço {i + 1}: {address.street}
                </p>
              ))}
            </ContactDetailSection>
          </ContactDetailInfo>
          <ContactDetailButtons>
            <EditContact to={`/edit/${id}`} state={contact}>
              Editar
            </EditContact>
            <DeleteContact onClick={() => handleDelete(id)}>
              Excluir
            </DeleteContact>
          </ContactDetailButtons>
        </ContactDetailCard>
      )}
    </ContactDetailWrapper>
  );
};
