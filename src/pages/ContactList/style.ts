import styled from "styled-components";
import { Contact } from "../../types/contact";
import { Link } from "react-router-dom";

interface IContactSuggestionsProps {
  showSuggestions: boolean;
}

export const ContactListWrapper = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

export const StyledContactList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

export const ContactSection = styled.li`
  margin-top: 20px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
`;

export const ContactSectionTitle = styled.p`
  font-size: 35px;
  margin-bottom: 40px;
  text-align: left;
  width: 90%;
`;

export const InputSearchWrapper = styled.div`
  width: 50%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputSearch = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 10px;
  border: solid 1px gray;
  padding: 5px;
  font-size: 20px;
`;

export const ContactSuggestions = styled.div`
  display: ${({ showSuggestions }: IContactSuggestionsProps) =>
    showSuggestions ? "flex" : "none"};
  flex-direction: column;
  position: absolute;
  top: 123px;
  background-color: #f9f9f9;
  width: 250px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const StyledSuggestion = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 40px;
  color: black;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 2px;
  transition: background 0.2s ease-in-out 0.2s;

  :hover {
    background-color: #ccc;
  }
`;
