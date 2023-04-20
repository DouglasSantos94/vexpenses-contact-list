import { Link } from "react-router-dom";
import styled from "styled-components";
export const ContactDetailWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;
`

export const ContactDetailCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  padding: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2), -1px -1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

export const ContactDetailName = styled.h1`
  font-size: 30px;
  margin-bottom: 15px;
`

export const ContactDetailSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-bottom: 20px;

  h2 {
    font-size: 25px;
    margin-bottom: 5px;
  }
`;

export const ContactDetailInfo = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  box-sizing: border-box;

`;

export const ContactDetailButtons = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const EditContact = styled(Link)`
  text-decoration: none;
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0A7EE3;
  border-radius: 6px;
  color: white;
  font-size: 20px;
`;

export const DeleteContact = styled.button`
  text-decoration: none;
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #DB1414;
  border-radius: 6px;
  color: white;
  font-size: 20px;
  border: none;
  cursor: pointer;
`;