const { pool } = require("../models/db.js");
module.exports = {
  frontEnd: (req, res) => {
    //query data in the Postgres database
    let query = "SELECT * FROM babyfootmanager.games";
    let query_boolean = "SELECT * FROM babyfootmanager.games WHERE state_game = 'false'";

    pool.query(query, (err, outcome) => {
      if (err) {
        res.sendStatus(422);
      } else {

        pool.query(query_boolean, (err, outcome2) => {
          res.render("index.ejs", {
            title: "RIA Web App",
            games: outcome.rows,
            countG: outcome2.rowCount
          });
        });
      }
    });
  }
};
