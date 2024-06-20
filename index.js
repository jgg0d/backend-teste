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
      data_nascimento: "2002-02-02",
      cpf: "11122233398",
      endereco: "Av. Avenida Brasil Brasil Brasil BrasilBrasil, centro, SP, CEP: 13444-002",
      status: "Ativo",
    },
    {
      nome: "Maria",
      data_nascimento: "2001-01-01",
      cpf: "44422233398",
      endereco: "Rua 2, centro, SP, CEP: 13999-001",
      status: "Inativo",
    },
  ]);
});

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));

module.exports = app;
