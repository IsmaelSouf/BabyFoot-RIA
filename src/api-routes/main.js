const { pool } = require("../models/db.js");
const express = require("express");
//Router object 
const router = express.Router();
const game_socket = require("../event-store/sockets.js");

//Route for the post method to create a new game
router.post("/:name_of_games", (req, res) => {
  const name_of_games = req.params.name_of_games;
  const query =
    "INSERT INTO babyfootmanager.games(games_id, names_of_game, state_game) VALUES (default, '" +
    name_of_games +
    "', default) RETURNING *";
  pool.query(query, (err, _res) => {
    if (err) {
      res.sendStatus(422);
    } else {
      const rows = _res.rows;
      const change_data = {
        timestamp: new Date(),
        type: "Insert",
        data: {
          name: name_of_games,
          games_id: rows[0].games_id,
          gameState: rows[0].state_game
        }
      };
      res.sendStatus(200);
      game_socket.updateSocket(change_data);
    }
  });
});

//Route for our put method to update the state of the game
router.put("/:id/:indexTable", (req, res) => {
  const games_id = req.params.id;
  const query =
    "UPDATE babyfootmanager.games SET state_game = 'true' WHERE games_id = '" +
    games_id +
    "'";
  pool.query(query, (err, _res) => {
    if (err) {
      res.sendStatus(422);
    } else {
      const change_data = {
        timestamp: new Date(),
        type: "Update",
        data: {
          games_id: games_id,
          partieIndex: req.params.indexTable,
          state_game: true
        }
      };
      res.sendStatus(200);
      game_socket.updateSocket(change_data);
    }
  });
});

//Route for our delete method to remove a game 
router.delete("/:id/:indexTable", (req, res) => {
  const games_id = req.params.id;
  const query =
    "DELETE FROM babyfootmanager.games WHERE games_id = '" + games_id + "'";
  pool.query(query, (err, _res) => {
    if (err) {
      res.sendStatus(422);
    } else {
      const change_data = {
        timestamp: new Date(),
        type: "Delete",
        data: {
          partieIndex: req.params.indexTable
        }
      };
      res.sendStatus(200);
      game_socket.updateSocket(change_data);
    }
  });
});

//Route for our post method to send message to the other users
router.post("/tchat/:user/:message", (req, res) => {
  const user = req.params.user;
  const message = req.params.message;
  const change_data = {

    timestamp: new Date(),
    type: "Message",
    data: {
      user: user,
      message: message
    }
  };
  res.sendStatus(200);
  game_socket.updateSocket(change_data);
});

module.exports = router;