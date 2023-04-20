import styled from "styled-components";

export const StyledContactList = styled.ul`
font-family: "Roboto", sans-serif;

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
  width: 60%;
  align-items: center;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
`

export const ContactSectionTitle = styled.p`
  font-size: 35px;
  text-align: left;
  width: 90%;
`;