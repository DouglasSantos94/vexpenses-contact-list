import styled from "styled-components";

export const Card = styled.div`
  font-family: "Roboto", sans-serif;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;

  @media (max-width: 600px)
  {
    width: 100%;
  }
  
`;

export const CardTitle = styled.h2`
  font-size: 30px;
  margin: 0;
  padding: 0;
  font-weight: normal;
`;


export const ContactInfo = styled.div`
  width: 50%;
  font-size: 24px;
`;
