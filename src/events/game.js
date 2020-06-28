let redis = require('../config/redis')

exports.use = (io) => {
    const rooms = require('../controller/room');
    const game = require('../game/controller/game');

    io.on("connection", client => {
        let player = client.handshake.session.user;
        let room;

        client.on('newGame', (players) => {
            let room = rooms.create()

            let p1 = io.sockets.sockets[players.player1]
            let p2 = io.sockets.sockets[players.player2]

            game.newGame(room, { p1, p2 })

            return true;
        })
        client.on('invite', async invited => {
            try {
                let invitedId = await redis.getAsync(invited)
                io.to(invitedId).emit('invited', client.id, `${player} está te chamando para uma partida!`);
            }catch(err) {
                console.error(err.message)
            }
        })
        client.on('joinGame', (roomName) => {
            if (rooms.exists(roomName)) {
                rooms.setTo(roomName, player);
                game.join(roomName, player, client);
                client.join(roomName);
                room = roomName;
            }
        });
        client.on('click', (id) => {
            if (game.existMatch(room) && game.isStarted(room))
                game.shot(room, player, id);
        });
        client.on('playHere', () => {
            game.playHere(room, player, client);
        });
        client.on('disconnect', () => {
            if (room) {
                rooms.unsetTo(room, player);
                setTimeout(() => {
                    if (!io.sockets.adapter.rooms[room]) {
                        rooms.remove(room);
                        client.broadcast.emit('closeRoom', room);
                    }
                }, 800);
            }
        });
    });
}
