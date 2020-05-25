//Connect to database
const Pool = require('pg').Pool

const pool = new Pool({
  user: "postgres",
  database: "babyfoot",
  password: "ismael99",
  port: 5432
});

//Error handling for the database
pool
  .connect()
  .then(client => {
    console.log("Connecté à la base de données.");
    return;
  })
  .catch(err => {
    console.error("Echec de la connexion de la base de données.");
    console.error(err);
  });

module.exports = {
  pool
};
