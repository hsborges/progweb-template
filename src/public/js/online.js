
function handleUserClick(e) {
    socket.emit('invite', e.id)
}

const handleInvite = (id, msg) => {
    showMessage(msg, 'Aceitar', function() {
        socket.emit('newGame', { player1: id, player2: socket.id })
    });
}

const listOnline = (user) => {
    $("#online-list").append(`
        <li
            class="user-online"
            id="${user}"
            onclick="handleUserClick(this);"
        >
            ${user}
        </li>
    `);
}

const toggle_sidebar = () => {
    $("#wrapper").toggleClass("toggled");
}

socket.on('listOnline', users => {
    users.forEach(element => {
        listOnline(element)
    });
});

socket.on('newUser', user => {
    listOnline(user);
});

socket.on('dropUser', user => {
    $('#' + user).closest('li').remove();
});

socket.on('invited', handleInvite)
