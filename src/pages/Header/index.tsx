import React from "react";
import { Title, Wrapper, NewContact } from "./style";

export const Header = () => (
  <Wrapper>
    <Title>Lista de contatos</Title>
    <NewContact>Novo contato</NewContact>
  </Wrapper>
);

export default Header;