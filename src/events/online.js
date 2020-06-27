let redis = require('../config/redis')

exports.use = (io) => {
    const online = require('../controller/online');

    io.on("connection", async client => {
        const username = client.handshake.session.user;
        client.join(username);

        try {
            redis.set(username, client.id)
        }catch(err) {
            console.error(err.message)
        }

        if (!online.check(username)) {
            client.broadcast.emit('newUser', username);
            console.log(`User online: ${username}`);
        }
        online.set(username);

        client.emit('listOnline', online.list().filter(user => user !== username));

        client.on("disconnect", () => {
            online.remove(username);
            if (!online.check(username)) {
                client.broadcast.emit('dropUser', username);
            }
        });
    });
}
