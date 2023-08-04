"use client";
import axios from "axios";
import { useState } from "react";

interface IGetHandlerProps {
  url: string;
}

function GetHandlerExtrato(props: IGetHandlerProps) {
  let initialUrlValue = {
    value: "",
  };
  const [data, setData] = useState([
    {
      id_movimentacao: "",
      numero_conta: "",
      tipo: "",
      valor: "",
    },
  ]);
  const [urlParam, setUrlParam] = useState(initialUrlValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlParam({ ...urlParam, [e.target.name]: e.target.value });
  };
  console.log(urlParam);

  const handleRequest = () => {
    return axios({
      method: "get",
      url: `${props.url}/${urlParam.value}`,
    }).then(function (response) {
      console.log(response.data);
      setData(response.data);
    });
  };

  const renderData = () => {
    return (
      <div>
        <p>{data[0].id_movimentacao}</p>
        <p>{data[0].numero_conta}</p>
        <p>{data[0].tipo}</p>
        <p>{data[0].valor}</p>
      </div>
    );
  };

  return (
    <>
      Informe o ID do Cliente
      <input
        type="text"
        value={urlParam.value || ""}
        name="value"
        onChange={onChange}
        style={{
          width: "15%",
          margin: "10px",
        }}
      />
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
        Consultar Conta
      </button>
      <div>{renderData()}</div>
    </>
  );
}

export default GetHandlerExtrato;
