import axios from "axios";

export const viaCep = (cep: string | null | undefined) => 
  axios.get(`https://viacep.com.br/ws/${cep}/json/`, {
    headers: { "Content-Type": "application/json;charset=utf-8", "Access-Control-Allow-Origin": "*" }
});