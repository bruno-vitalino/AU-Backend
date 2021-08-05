const Joi = require("@hapi/joi");

function Register(body) {
  this.nome = body.nome
  this.especie = body.especie
  this.porte = body.porte
  this.sexo = body.sexo 
  this.situacao = body.situacao 
  this.idade = body.idade
  this.endereco = body.endereco 
}


Register.prototype.validateRegister = function(register){
  
  const scheme = {
    nome: Joi.string().min(3).max(200).required(),
    especie: Joi.string().min(3).max(200).required(),
    porte: Joi.string().min(3).max(200).required(),
    sexo: Joi.string().min(1).max(5).required(),
    situacao: Joi.string().min(1).max(10).required(),
    idade: Joi.string().min(3).max(200).required(),
    endereco: Joi.string().min(3).max(200).required()
  };

  return Joi.validate(register, scheme)
};



module.exports = Register