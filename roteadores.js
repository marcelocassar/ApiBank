const express = require('express');

const { listarContas, criarConta, atualizarUsuario, excluirConta, 
    depositar, sacar, transferir, consultarSaldo, emitirExtrato 
} = require('./controladores/operacoesBancarias');

const { verificarSenhaBanco, verificarDados } = require('./midwares/midwares');

const rotas = express();

rotas.get('/contas', verificarSenhaBanco, listarContas);

rotas.post('/contas',criarConta);

rotas.put('/contas/:numeroConta/usuario', verificarDados, atualizarUsuario);

rotas.delete('/contas/:numeroConta', excluirConta);
rotas.post('/transacoes/depositar', depositar);
rotas.post('/transacoes/sacar', sacar);
//rotas.post('/transacoes/transferir', transferir);
rotas.get('/contas/saldo?numero_conta=123&senha=123', consultarSaldo);
rotas.get('/contas/extrato?numero_conta=123&senha=123', emitirExtrato);

module.exports = {rotas};
