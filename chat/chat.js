const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

server.listen(3000);

console.log("server start on 3000");

app.get("/", function (request, respons) {
  respons.sendFile(__dirname + "/chatIFrame.html");
});

users = [];
connections = [];

io.sockets.on("connection", function (socket) {
  console.log("connected");
  connections.push(socket);

  socket.on("disconnect", function (data) {
    connections.splice(connections.indexOf(socket), 1);
    console.log("disconnected");
  });

  socket.on("send mess", function (data) {
    io.sockets.emit("add mess", {
      mess: data.mess,
    });
  });
});
