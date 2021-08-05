const express = require("express");
const router = express.Router()
var Register = require("../model/Register")
const AppDatabaseManager = require("../manager/appDatabaseManager");
const appDatabaseManager = new AppDatabaseManager();

router.post("/register", async(req, res) => {
  var register = new Register(req.body)
  const { error } = register.validateRegister(register);

  if(error) return res.status(400).send({message: error.details[0].message})
  
  let animalCheck = await appDatabaseManager.fetchAnimalByName(register.nome)

  if(animalCheck.length != 0) return res.status(400).send("animal already registered")

  await appDatabaseManager.dbRegister(register)

  res.status(200).send("Hey");
  console.log(req.body)
  console.log(register)
})

module.exports = router