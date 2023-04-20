import React from "react";
import { FormProvider } from "react-hook-form";
import styled from "styled-components";

export const FormWrapper = styled(FormProvider)`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const StyledForm = styled.form`
  font-family: "Roboto", sans-serif;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const FormInput = styled.input`
  width: 90%;
  height: 30px;
  margin-bottom: 10px;
  font-size: 15px;
  border-radius: 8px;
  border: solid 1px gray;
  box-sizing: border-box;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;