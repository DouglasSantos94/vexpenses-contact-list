import React from "react";
import { Title, Wrapper, NewContact } from "./style";

export const Header = () => (
  <Wrapper>
    <Title to={"/"}>Lista de contatos</Title>
    <NewContact to="/add-contact">Novo contato</NewContact>
  </Wrapper>
);

export default Header;