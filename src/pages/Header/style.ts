
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.header`
  font-family: "Roboto", sans-serif;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: hsl(0, 0%, 98%);
  box-shadow: 1px 1px 2px rgba(168, 168, 168, 0.7);
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 30px;
  margin-left: 30px;
`;

const NewContact = styled(Link)`
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
  margin-right: 100px;
`;

export { Title, Wrapper, NewContact };