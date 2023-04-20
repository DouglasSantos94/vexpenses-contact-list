import styled from "styled-components";

export const StyledForm = styled.form`
  font-family: "Roboto", sans-serif;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-items: center;
`;

export const FormInput = styled.input`
  width: 80%;
  height: 30px;
  font-size: 15px;
  border-radius: 8px;
  border: solid 1px gray;
  margin-bottom: 5px;
  box-sizing: border-box;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 70px;
`;

export const Label = styled.label`
  font-size: 20px;
  margin: 10px 0;
  width:
`;

export const SectionTitle = styled.h2`
  font-size: 30px;
  margin: 10px 0;
`;

export const AddressesTitle = styled.p`
  font-size: 25px;
  margin: 20px 0;
`;

export const SaveContactButton = styled.button`
  width: 20%;
  height: 30px;
  color: white;
  border-radius: 8px;
  border: none;
  background-color: #0A7EE3;
  font-size: 15px;
  margin-top: 20px;
  cursor: pointer;
`;