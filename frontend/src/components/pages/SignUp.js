import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Button } from "../Button";
import "../Navbar.css";
import "../../App";

import api from "../../service/api";

function SignUp() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaconfirm, setSenhaconfirm] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState();

  function cadastrar() {
    api
      .post("add_usuario", {
        e: email,
        n: nome,
        s: senha,
        c: cpf,
        t: telefone,
      })
      .then(() => {});
  }

  return (
    <div className="sign-up">
      <div className="box">
        <h1>Cadastro</h1>
        <p>
          <label for="email_cadastro">Email</label>
          <input
            id="email_cadastro"
            name="email_cadastro"
            required="required"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </p>

        <p>
          <label for="nome_cadastro">Nome</label>
          <input
            id="nome_cadastro"
            name="nome_cadastro"
            required="required"
            type="text"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
        </p>

        <p>
          <label for="senha_cadastro">Senha</label>
          <input
            id="senha_cadastro"
            name="senha_cadastro"
            required="required"
            type="password"
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />
        </p>

        <p>
          <label for="senha1_cadastro">Confirmar Senha</label>
          <input
            id="senha1_cadastro"
            name="senha1_cadastro"
            required="required"
            type="password"
            value={senhaconfirm}
            onChange={(e) => {
              setSenhaconfirm(e.target.value);
            }}
          />
        </p>

        <p>
          <label for="cpf_cadastro">CPF</label>
          <input
            id="cpf_cadastro"
            name="cpf_cadastro"
            required="required"
            type="number"
            value={cpf}
            onChange={(e) => {
              setCpf(e.target.value);
            }}
          />
        </p>

        <p>
          <label for="telefone_cadastro">Telefone</label>
          <input
            id="telefone_cadastro"
            name="telefone_cadastro"
            required="required"
            type="number"
            value={telefone}
            onChange={(e) => {
              setTelefone(e.target.value);
            }}
          />
        </p>
        <div className="link">
          <p>
            <Button
              buttonStyle="btn--secondary"
              buttonLink="sign-in"
              onClick={cadastrar}
            >
              Proxima{" "}
            </Button>
            <Link to="sign-in">Faça login em vez disso</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
