
class AppDatabaseManager { 

  fetchAnimalByName(nome) {
    return db.query("SELECT * FROM animais where nome = ?", nome).then(rows => {
      return rows;
    })
  }

  dbRegister(register) {
    return db.query("INSERT INTO animais (nome, especie, porte, sexo, situacao, idade, endereco) VALUES (?, ?, ?, ?, ?, ?, ?)", [
      register.nome,
      register.especie,
      register.porte,
      register.sexo,
      register.situacao,
      register.idade,
      register.endereco
    ])
  }

  dbUptade(update) {
    return db.query("UPDATE animais SETanimais (nome, especie, porte, sexo, situacao, idade, endereco) VALUES (?, ?, ?, ?, ?, ?, ?)", [
      update.nome,
      update.especie,
      update.porte,
      update.sexo,
      update.situacao,
      update.idade,
      update.endereco
    ])
  }
}
module.exports = AppDatabaseManager