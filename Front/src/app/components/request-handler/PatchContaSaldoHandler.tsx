"use client";
import axios from "axios";
import React, { useState } from "react";

interface IUpdateHandlerProps {
  url: string;
}

function PatchContaSaldoHandler(props: IUpdateHandlerProps) {
  const [state, setState] = React.useState({
    tipo: "",
    valor: "",
  });

  let initialUrlValue = {
    value: "",
  };

  const [urlParam, setUrlParam] = useState(initialUrlValue);
  const onChangeUrlParams = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlParam({ ...urlParam, [e.target.name]: e.target.value });
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
      method: "patch",
      url: `${props.url}/${urlParam.value}`,
      data: state,
    });
  };

  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label>
          Número da Conta:
          <input
            type="text"
            name="value"
            value={urlParam.value || ""}
            onChange={onChangeUrlParams}
            style={{
              width: "15%",
              margin: "10px",
            }}
          />
        </label>
        <label>
          Tipo:
          <input
            type="text"
            name="tipo"
            value={state.tipo}
            onChange={handleChange}
            style={{
              width: "15%",
              margin: "10px",
            }}
          />
        </label>
        <label>
          Valor R$:
          <input
            type="text"
            name="valor"
            value={state.valor}
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
            width: "20%",
            height: "30%",
            margin: "10px",
            color: "white",
            backgroundColor: "#09285a",
            border: "none",
          }}
        >
          Cadastrar Movimentação
        </button>
      </form>
    </>
  );
}

export default PatchContaSaldoHandler;
