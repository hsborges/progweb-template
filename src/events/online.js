let redis = require('../config/redis')

exports.use = (io) => {
    const online = require('../controller/online');

    io.on("connection", async client => {
        const username = client.handshake.session.user;
        client.join(username);

        try {
            redis.set(username, client.id)
        }catch(err) {
            console.error('redis error', err.message)
        }

        if (!online.check(username)) {
            client.broadcast.emit('newUser', username);
        }
        online.set(username);
        let users = online.list().filter(user => user !== username);

        client.emit('listOnline', users);

        client.on("disconnect", () => {
            online.remove(username);
            if (!online.check(username)) {
                client.broadcast.emit('dropUser', username);
            }
        });
    });
}
