const api = require('./api');
const http = require('http');
const server = http.createServer(api);
const PORT = 3000;
const sockets = require('./sockets');

//const io = require('socket.io')(server);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

sockets.listen(io);