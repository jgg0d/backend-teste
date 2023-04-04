require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

app.use(
  cors({
    exposedHeaders: "Authorization",
  })
);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Servidor rodando" });
});

app.get("/clients", (req, res) => {
  res.status(200).json([
    {
      nome: "João",
      data_nascimento: "01/01/2002",
      cpf: "111-222-333-98",
      endereco: "Rua 1, centro, SP, CEP: 13444-002",
      status: "Ativo",
    },
    {
      nome: "Maria",
      data_nascimento: "01/01/2001",
      cpf: "444-222-333-98",
      endereco: "Rua 2, centro, SP, CEP: 13999-001",
      status: "Inativo",
    },
  ]);
});

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));

module.exports = app;
