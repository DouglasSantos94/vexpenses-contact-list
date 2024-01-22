import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
  width: 80%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2), -1px -1px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: normal;
`;

export const ContactInfo = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 12px;
`;

export const SeeContact = styled(Link)`
  text-decoration: none;
  width: 100px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0a7ee3;
  border-radius: 6px;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: 

  &:hover {
    background-color: #1964a4;
  }
`;
