const mysql = require("mysql2");

function executaQuery(query, res) {
  const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "dbpsychologen",
  });

  conexao.query(query, function (error, results) {
    if (error) {
      res.json(error);
    } else {
      res.json(results);
    }
    conexao.end();
    console.log("executou!");
  });
}

module.exports = executaQuery;

/*
conexao.connect(function(err){
    if(err) return console.log(err);
    console.log('conectou');
})*/
