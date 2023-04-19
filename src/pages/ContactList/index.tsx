import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { StyledContactList } from "./style";
import { ContactCard } from "../Contact";
import { Contact } from "../../types/contact";
import { useContactSearch } from "../../hooks/useContactSearch";
import { Link } from "react-router-dom";


export const ContactList = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const contactSearchRef = useRef<HTMLInputElement>(null);

  const {
    searchedContactName,
    suggestions,
    selectedSuggestion,
    activeSuggestion,
    handleSearch,
    handleKeyDown,
    handleClick
  } = useContactSearch(contacts, contactSearchRef.current);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  useEffect(() => {
    axios.get("http://localhost:3000/contacts")
      .then(({data})=> setContacts(data));
  }, [])
  console.log(contacts)

  return (
    <>
      <div>
        <input type="text" onChange={handleSearch} value={searchedContactName} onKeyDown={handleKeyDown} ref={contactSearchRef} placeholder="Buscar contato" />
        <div style={{position: "absolute", display: "flex", flexDirection: "column", backgroundColor: "#f9f9f9", minWidth: "160px", boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)", zIndex: 1}}>
          {suggestions.map(({ id, name }: Contact) => <Link key={id} to={`/contact/${id}`}>{name}</Link>)}
        </div>
      </div>
      
      <StyledContactList>
        {letters.map(
          (letter, i) => (
            <div key={i}>
              <p>{letter}</p>
              {contacts.filter(contact => contact.name[0]?.toUpperCase() == letter).map((contact, i) => 
                <ContactCard contact={contact} key={i} />
              )}
            </div>
          ))}
      </StyledContactList>
    </>
  )
}
