var express = require("express");

var app = express();

var server = require("http").createServer(app);

// Noi socket.io vao server
var io = require("socket.io")(server);

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.use(express.static('public'));

io.on('connection', (client) => {
    console.log('Client connected ...');
    client.on('join', (data) => {
        console.log(data);
    });

    client.on('messages', (data) => {
        client.emit('thread', data);
        client.broadcast.emit('thread', data);
    });
});

server.listen(4200, () => {
    console.log("Server is running at " + server.address().port);
});