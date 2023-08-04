"use client";
import axios from "axios";
import React, { useState } from "react";

interface IUpdateHandlerProps {
  url: string;
}
function UpdateClienteHandler(props: IUpdateHandlerProps) {
  const [state, setState] = React.useState({
    nome: "",
    data_nascimento: "",
    endereco: "",
    email: "",
    senha: "",
  });

  let initialUrlValue = {
    value: "",
  };

  const [urlParam, setUrlParam] = useState(initialUrlValue);
  const onChangeUrlParams = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlParam({ ...urlParam, [e.target.name]: e.target.value });
    console.log(urlParam);
  };

  const handleUrlCall = () => {
    return axios({
      method: "get",
      url: `http://localhost:3001/cliente/${urlParam.value}`,
    }).then(function (response) {
      console.log(response.data);
      setState(response.data);
      console.log(state);
    });
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
    console.log(state);
  }

  const handleRequest = () => {
    return axios({
      method: "put",
      url: `${props.url}/${urlParam.value}`,
      data: state,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label>
        Informe o ID do Cliente que deseja alterar:
        <input
          type="text"
          name="value"
          value={urlParam.value || ""}
          onChange={onChangeUrlParams}
        />
      </label>
      <button
        onClick={handleUrlCall}
        style={{
          width: "15%",
          height: "30%",
          margin: "10px",
          color: "white",
          backgroundColor: "#09285a",
          border: "none",
        }}
      >
        Procurar
      </button>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label>
          Nome Completo
          <input
            type="text"
            name="nome"
            value={state.nome}
            onChange={handleChange}
            style={{
              width: "20%",
              margin: "10px",
            }}
          />
        </label>
        <label>
          Data de Nascimento
          <input
            type="text"
            name="data_nascimento"
            value={state.data_nascimento}
            onChange={handleChange}
            style={{
              width: "7%",
              margin: "10px",
            }}
          />
        </label>
        <label>
          Endereço
          <input
            type="text"
            name="endereco"
            value={state.endereco}
            onChange={handleChange}
            style={{
              width: "15%",
              margin: "10px",
            }}
          />
        </label>
        <label>
          E-mail
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
            style={{
              width: "15%",
              margin: "10px",
            }}
          />
        </label>
        <label>
          Senha
          <input
            type="text"
            name="senha"
            value={state.senha}
            onChange={handleChange}
            style={{
              width: "15%",
              margin: "10px",
            }}
          />
        </label>
        <button
          onClick={handleRequest}
          style={{
            width: "15%",
            height: "30%",
            margin: "10px",
            color: "white",
            backgroundColor: "#09285a",
            border: "none",
          }}
        >
          Atualizar Conta
        </button>
      </form>
    </div>
  );
}
export default UpdateClienteHandler;
