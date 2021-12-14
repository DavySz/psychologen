import React from "react";
import { useHistory } from "react-router-dom";
import "./mainPagePsc.css";
import "../Navbar.css";
import "../../App";

function MainPagePsc() {
  const history = useHistory();
  return (
    <div className="sign-up">
      <div className="box">
        <h1>Agenda</h1>
        <div className="image2"></div>
        <h2 className="d">Veja e gerencie suas consultas.</h2>

        <div className="link">
          <p>
            <button
              className="k"
              onClick={() => {
                history.push("gerenciamento-psc");
              }}
            >
              Entrar{" "}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPagePsc;
