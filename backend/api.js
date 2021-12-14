const express = require("express");
const cors = require("cors");

const executaQuery = require("./dbconect");

const api = express();
api.use(cors());
api.use(express.json());

api.post("/add_usuario", (req, res) => {
  console.log(req.body);
  let query = `INSERT INTO dbpsychologen.usuarios (email, nome, senha, cpf, telefone) VALUES ('${req.body.e}','${req.body.n}','${req.body.s}','${req.body.c}','${req.body.t}');`;
  executaQuery(query, res);
});

api.post("/login", (req, res) => {
  console.log(req.body);
  let query = `SELECT * FROM dbpsychologen.usuarios WHERE (email = '${req.body.e}' AND senha = '${req.body.s}')`;
  executaQuery(query, res);
});

api.post("/agendar", (req, res) => {
  console.log(req.body);
  let query = `INSERT INTO dbpsychologen.agendamento (nome_psc, data, hora, cpf) VALUES ('${req.body.p}','${req.body.d}','${req.body.h}','${req.body.c}');`;
  executaQuery(query, res);
});

api.get("/g/:cpf", (req, res) => {
  let cpf = req.params.cpf;
  let query = `SELECT * FROM dbpsychologen.agendamento WHERE (cpf = '${cpf}')`;
  executaQuery(query, res);
});

api.get("/cancelar/:id", (req, res) => {
  let id = req.params.id;
  let query = `DELETE FROM dbpsychologen.agendamento WHERE (id = '${id}')`;
  executaQuery(query, res);
});

api.get("/g_psc", (req, res) => {
  console.log(req.body);
  let query = `SELECT * FROM agendamento INNER JOIN usuarios ON agendamento.cpf = usuarios.cpf`;
  executaQuery(query, res);
});

api.get("/finalizar/:cpf", (req, res) => {
  let cpf = req.params.cpf;
  let query = `DELETE FROM dbpsychologen.agendamento WHERE (cpf = '${cpf}')`;
  executaQuery(query, res);
});

api.listen(8080, () => {
  console.log("Api na porta 8080");
});
