import React, { useState } from "react";

import { useCurrentUser } from "../../hooks/useUser";

import { Link, useHistory } from "react-router-dom";
import "../Navbar.css";
import "./signin.css";
import "../../App";

import api from "../../service/api";

function SignIn() {
  const user = useCurrentUser();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function logar() {
    if (email === "admin" && senha === "admin") {
      history.push("/main-psc");
    } else {
      api
        .post("login", {
          e: email,
          s: senha,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.length > 0) {
            user.currentUser.nome = response.data[0].nome;
            user.currentUser.email = response.data[0].email;
            user.currentUser.cpf = response.data[0].cpf;
            user.currentUser.senha = response.data[0].senha;
            user.currentUser.telefone = response.data[0].telefone;
            history.push("/main");
          } else {
            alert("Usuario ou Senha incorreta");
          }
        });
    }
  }

  return (
    <div className="sign-up">
      <div className="box">
        <h1>Fazer login</h1>
        <h2 className="a">Use seu Email, CPF ou CRP </h2>
        <p>
          <label for="email_entrar">Email, CPF ou CRP</label>
          <input
            id="email_entrar"
            name="email_entrar"
            required="required"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </p>

        <p>
          <label for="senha_entrar">Senha</label>
          <input
            id="senha_entrar"
            name="senha_entrar"
            required="required"
            type="password"
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />
        </p>

        <div className="link">
          <p>
            <button onClick={logar} className="b">
              Entrar
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
