import React from "react";

import { useHistory } from "react-router-dom";
import { Button } from "../Button";
import "../Navbar.css";
import "./main.css";
import "../../App";

function MainPage() {
  const history = useHistory();

  return (
    <div className="sign-up">
      <div className="box">
        <h1>Agendamento</h1>
        <div className="image2"></div>
        <h2 className="a">
          Agende uma data e hora para realizar um escuta psicológica.
        </h2>

        <div className="link">
          <p>
            <Button buttonStyle="btn--main">Agendar </Button>
          </p>
        </div>
      </div>
      <div className="box">
        <h1>Gerenciamento</h1>

        <div className="image1"></div>

        <h2 className="a">
          Gerencie suas escutas alterando data, horário e psicológa.
        </h2>
        <div className="link">
          <p>
            <button
              className="b"
              onClick={() => {
                history.push("/gerenciamento");
              }}
            >
              Gerenciar{" "}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
