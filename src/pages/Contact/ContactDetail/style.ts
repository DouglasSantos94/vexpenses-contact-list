import { Link } from "react-router-dom";
import styled from "styled-components";
export const ContactDetailWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  @media (max-width: 650px) {
    padding-top: 50px;
  }
`;

export const ContactDetailCard = styled.div`
  font-family: "Roboto", sans-serif;
  width: 60%;
  padding: 30px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2), -1px -1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  box-sizing: border-box;

  @media (max-width: 650px) {
    flex-direction: column;
    width: 90%;
  }
`;

export const ContactDetailName = styled.h1`
  font-size: 25px;
  position: relative;
  top: 0;
  margin-bottom: 25px;
`;

export const ContactDetailSection = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 50%;
  width: 80%;
  margin-bottom: 20px;

  h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    font-size: 13px;
    margin-bottom: 5px;
  }

  @media (max-width: 650px) {
    min-height: 20%;
    width: 100%;
  }
`;

export const ContactDetailInfo = styled.div`
  width: 100%;
  display: flex;
  min-height: 50%;
  flex-direction: column;
  box-sizing: border-box;
`;

export const ContactDetailButtons = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 650px) {
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  }
`;

export const EditContact = styled(Link)`
  text-decoration: none;
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0a7ee3;
  border-radius: 6px;
  color: white;
  font-size: 15px;

  @media (max-width: 650px) {
    width: 100px;
  }
`;

export const DeleteContact = styled.button`
  text-decoration: none;
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #db1414;
  border-radius: 6px;
  color: white;
  font-size: 15px;
  border: none;
  cursor: pointer;

  @media (max-width: 650px) {
    width: 100px;
  }
`;
