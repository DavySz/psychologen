import React, { useState, useEffect } from "react";
import { useCurrentUser } from "../../hooks/useUser";
import { useHistory } from "react-router-dom";
import api from "../../service/api";
import "./gerenciamento.css";

function Gerenciamento() {
  const [consultas, setConsultas] = useState([]);
  const history = useHistory();
  const user = useCurrentUser();

  function cancelar(id) {
    api.get(`cancelar/${id}`).then(() => {
      console.log("denuncia finalizada");
      history.push("/main");
    });
  }

  useEffect(() => {
    api
      .get(`g/${user.currentUser.cpf}`)
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
            <h2 className="space">Data: {r.data}</h2>
            <h2 className="space">Hora: {r.hora}</h2>
            <h2 className="space">Psicóloga: {r.nome_psc}</h2>

            <button onClick={() => cancelar(r.id)} className="k">
              Cancelar consulta{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Gerenciamento;
