import React from "react";import { ContactList } from "../ContactList";
import { Link } from "react-router-dom";


export const Home = () => {

  return (
    <>
      <Link to="/add-contact">Novo contato</Link>
      <ContactList />
    </>
  )
}