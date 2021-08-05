
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

  
  
  dbUptade(update, id) {

    return db.query(`UPDATE animais SET situacao = (?) WHERE id_animais =${id}`, [
      update.situacao,      
    ])
  }
}
module.exports = AppDatabaseManager