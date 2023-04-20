import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2), -1px -1px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;

  @media (max-width: 600px)
  {
    width: 100%;
  }
  
`;

export const CardTitle = styled.h2`
  font-size: 30px;
  margin: 15px 0;
  font-weight: normal;
`;


export const ContactInfo = styled.div`
  margin: 20px 0;
  width: 50%;
  font-size: 24px;
`;

export const SeeContact = styled(Link)`
  text-decoration: none;
  width: 150px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0A7EE3;
  border-radius: 6px;
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;