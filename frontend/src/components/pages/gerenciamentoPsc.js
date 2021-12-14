import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../service/api";
import "./gerenciamentoPsc.css";

function GerenciamentoPsc() {
  const [consultas, setConsultas] = useState([]);
  const history = useHistory();

  function cancelar(id) {
    api.get(`finalizar/${id}`).then(() => {
      console.log("consulta finalizada");
      history.push("/main-psc");
    });
  }

  useEffect(() => {
    api
      .get(`g_psc`)
      .then((results) => {
        console.log(results.data);
        setConsultas(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="title">
        <h1>Gerencie suas consultas</h1>
      </div>
      {consultas.map((r) => {
        return (
          <div className="cardConsulta" key={r.cpf}>
            <div className="header">
              <h2 className="space">Data: {r.data}</h2>
              <h2 className="space">Hora: {r.hora}</h2>
            </div>
            <div className="header">
              <h2 className="space">Psicóloga: {r.nome_psc}</h2>
            </div>
            <div className="body">
              <h2>Paciente: {r.nome}</h2>
              <h2>Email: {r.email}</h2>
              <h2>Telefone: {r.telefone}</h2>
            </div>
            <button onClick={() => cancelar(r.cpf)}>Finalizar consulta </button>
          </div>
        );
      })}
    </div>
  );
}

export default GerenciamentoPsc;
