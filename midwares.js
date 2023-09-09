const verificarSenhaBanco = (req, res, next) => {
    const { senha_banco } = req.query;
    const { banco } = require("../bancodedados");
  
    if (!senha_banco) {
      return res.status(401).json({ Mensagem: "Por favor, informe a senha do banco" });
    }
  
    if (senha_banco === banco.senha) {
      next();
    } else {
      return res.status(403).json({ Mensagem: "Senha incorreta." });
    }
  };

  function verificarDados(req, res, next) {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
  
    if (!nome) {
      return res.status(400).json({ Mensagem: "Nome é obrigatório." });
    }
  
    if (!cpf) {
      return res.status(400).json({ Mensagem: "CPF é obrigatório." });
    }
  
    if (!data_nascimento) {
      return res.status(400).json({ Mensagem: "Data de nascimento é obrigatório." });
    }
  
    if (!telefone) {
      return res.status(400).json({ Mensagem: "Telefone é obrigatório." });
    }
  
    if (!email) {
      return res.status(400).json({ Mensagem: "E-mail é obrigatório." });
    }
  
    if (!senha) {
      return res.status(400).json({ Mensagem: "Senha é obrigatória." });
    }
  
    if ((nome, cpf, data_nascimento, telefone, email, senha)) {
      next();
    }
  }

  module.exports = {
    verificarSenhaBanco,
    verificarDados
  };