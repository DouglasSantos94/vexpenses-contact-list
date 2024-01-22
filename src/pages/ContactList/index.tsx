import React, { useEffect, useRef, useState } from "react";
import {
  ContactSection,
  ContactSectionTitle,
  InputSearchWrapper,
  StyledContactList,
  ContactListWrapper,
  InputSearch,
  ContactSuggestions,
  StyledSuggestion,
} from "./style";
import { ContactCard } from "../Contact";
import { Contact } from "../../types/contact";
import { useContactSearch } from "../../hooks/useContactSearch";
import { getContacts } from "../../api";

export const ContactList = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const contactSearchRef = useRef<HTMLInputElement>(null);

  const { suggestions, showSuggestions, handleSearch } = useContactSearch(
    contacts,
    contactSearchRef.current
  );

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  useEffect(() => {
    getContacts().then(({ data }) => setContacts(data));
  }, []);

  return (
    <ContactListWrapper>
      <InputSearchWrapper>
        <InputSearch
          type="text"
          onChange={handleSearch}
          ref={contactSearchRef}
          placeholder="Buscar contato"
        />
        <ContactSuggestions showSuggestions={showSuggestions}>
          {suggestions.length > 0 &&
            suggestions.map(({ id, name }: Contact) => (
              <StyledSuggestion key={id} to={`/contact/${id}`}>
                {name}
              </StyledSuggestion>
            ))}
        </ContactSuggestions>
      </InputSearchWrapper>

      <StyledContactList>
        {letters.map((letter, i) => (
          <ContactSection key={i}>
            <ContactSectionTitle>{letter}</ContactSectionTitle>
            {contacts
              .filter((contact) => contact.name[0]?.toUpperCase() == letter)
              .map((contact, i) => (
                <ContactCard contact={contact} key={i} />
              ))}
          </ContactSection>
        ))}
      </StyledContactList>
    </ContactListWrapper>
  );
};
