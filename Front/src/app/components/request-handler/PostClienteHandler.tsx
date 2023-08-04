"use client";
import axios from "axios";
import React from "react";

interface IPostHandlerProps {
  url: string;
}

function PostClienteHandler(props: IPostHandlerProps) {
  const [state, setState] = React.useState({
    nome: "",
    data_nascimento: "",
    endereco: "",
    email: "",
    senha: "",
  });

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
      method: "post",
      url: `${props.url}`,
      data: state,
    });
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label>
        Nome Completo:
        <input
          type="text"
          name="nome"
          value={state.nome}
          onChange={handleChange}
          style={{
            width: "20%",
            margin: "10px",
          }}
        ></input>
      </label>
      <label>
        Data de Nascimento:
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
        Endereço:
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
        E-mail:
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
        Senha:
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
        Criar Conta
      </button>
    </form>
  );
}

export default PostClienteHandler;
