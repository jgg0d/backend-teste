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
      name: "João",
      birth_date: "2002-02-02",
      cpf: "11122233398",
      address: "Av. Avenida Brasil Brasil Brasil BrasilBrasil, centro, SP, CEP: 13444-002",
      status: "Ativo",
    },
    {
      name: "Maria",
      birth_date: "2001-01-01",
      cpf: "44422233398",
      address: "Rua 2, centro, SP, CEP: 13999-001",
      status: "Inativo",
    },
  ]);
});

app.get("/companies", (req, res) => {
  res.status(200).json([
    {
      corporate_name: "Razão Social",
      fantasy_name: "Nome fantasia",
      address: "Rua 3, centro, SP, CEP: 13999-003",
      monetary_capital: 300000.99,
    }
  ]);
});

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));

module.exports = app;
