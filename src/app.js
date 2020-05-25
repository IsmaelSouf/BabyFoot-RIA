const express = require("express");
const game_socket = require("./event-store/sockets");
const path = require("path");
const app = express();
const compression = require("compression");
const port = 3000;

server = require("http").createServer(app);
io = require("socket.io").listen(server);

app.use(compression());
app.use(express.static(path.join(__dirname, "public")));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

io.sockets.on("connection", function (socket) {
  game_socket.generateSocket(socket.id, socket);
  socket.on("disconnect", function () {
    game_socket.removeSocket(socket.id);
  });
});

const { frontEnd } = require("./api-routes/index");
const gamesRouter = require("./api-routes/main");

app.get("/", frontEnd);
app.use("/game", gamesRouter);

server.listen(port);
