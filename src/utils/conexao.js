const mysql = require('mysql2/promise');
// create the connection to database
const conexao = async () => {

  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'corregedoria',
    database: 'usuario'
  });
  return connection
}

module.exports = conexao
