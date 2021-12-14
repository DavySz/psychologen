import React, { useState } from "react";
import { useCurrentUser } from "../../hooks/useUser";
import api from "../../service/api";
import { useHistory } from "react-router-dom";
import { Button } from "../Button";
import "./agn.css";

function Agendamento() {
  const history = useHistory();
  const user = useCurrentUser();
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [checked, setChecked] = useState("");
  var psc;
  function agendar() {
    if (checked === "on") {
      psc = "Izlana";
    } else {
      psc = "Deijiane";
    }
    api
      .post("agendar", {
        c: user.currentUser.cpf.toString(),
        d: data.toString(),
        h: hora.toString(),
        p: psc.toString(),
      })
      .then(() => {
        console.log("dados inseridos");
        history.push("/main");
      });
  }

  return (
    <div className="sign-up">
      <div className="box">
        <h1>Agendamento</h1>

        <p>
          <label for="data_agenda">Data</label>
          <input
            id="data_agenda"
            name="data_agenda"
            required="required"
            type="date"
            value={data}
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
        </p>

        <p>
          <label for="psicologa_agenda">Psicóloga Disponível</label>
          <br></br>
        </p>
        <p>
          <div className="row">
            <label for="psicologa_1">Izlana</label>
            <br />
            <input
              id="psicologa_1"
              name="psicologa_1"
              required="required"
              type="radio"
              onChange={(e) => {
                setChecked(e.target.value);
              }}
            />
          </div>
          <div className="row">
            <label for="psicologa_2">Deijiane</label>
            <br />
            <input
              id="psicologa_1"
              name="psicologa_1"
              required="required"
              type="radio"
              className="input"
            />
          </div>
        </p>

        <p>
          <label for="hora_agenda">Horário</label>
          <input
            id="hora_agenda"
            name="hora_agenda"
            required="required"
            type="time"
            value={hora}
            onChange={(e) => {
              setHora(e.target.value);
            }}
          />
        </p>
        <div className="link">
          <p>
            <Button buttonStyle="btn--main" onClick={agendar}>
              Agendar{" "}
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Agendamento;
