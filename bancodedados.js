const mysql = require('mysql');

// Configurações de conexão com o banco de dados
const dbConfig = {
  host: 'localhost',     // O host do servidor MySQL (normalmente 'localhost' para uma instalação local)
  user: 'joao alberto',   // O nome de usuário do banco de dados
  password: '123456', // A senha do banco de dados
  database: 'home' // O nome do banco de dados que vai conectar
};

// conexão com o banco de dados
const connection = mysql.createConnection(dbConfig);

// Tentar conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.log('Erro ao conectar ao banco de dados.');
    console.log()
    console.log('Informações sobre o erro abaixo.')
    console.log()
    console.error(err)

    return;
  }

  console.log('Conexão bem-sucedida com o banco de dados.');

  // Execute as operações do banco de dados aqui, se necessário

  // Feche a conexão com o banco de dados quando terminar
  connection.end((err) => {
    if (err) {
      console.log('Erro ao fechar a conexão com o banco de dados.');
      console.log()
      console.log('Informações sobre o erro abaixo.')
      console.log()
      console.error(err)
      
      return;
    }
    console.log('Conexão com o banco de dados foi fechada com sucesso.');
  });
});
