const express = require("express");
const { rotas } = require("./roteadores");

const app = express();

app.use(express.json());
app.use(rotas);

app.listen(3000, (console.log("Servidor iniciado..")));

//estrutura padrão solicitada pelo professor em aula, apenas com o acréscimo do console log
