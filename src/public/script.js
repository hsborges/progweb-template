const socket = io();

function createSquare(i, j) {
    let square = document.createElement('div');

    square.innerText = '';

    square.className = 'square sea';
    square.addEventListener('click', onClick)
    square.id = [i, j].join('');

    return square;
}

function onClick(event) {
  event.preventDefault()
  socket.emit('click', event.target.id)
}
(function createBoard() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      root.appendChild(createSquare(i, j));
    }
  }
})()

// Catch all the `[data-toggle-sidebar]` elements on the document.
document.querySelectorAll('[data-toggle-sidebar]').forEach(toggle => {
  // Add an event listener on those elements "click" event
  toggle.addEventListener('click', e => {
    // get the sidebar ID from the current element data attribute
    const sidebarID = toggle.dataset.toggleSidebar;
    // check if there is an element on the doc with the id
    const sidebarElement = sidebarID ? document.getElementById(sidebarID) : undefined;
    // if there is a sidebar with the passed id (data-toggle-sidebar)
    if (sidebarElement) {
       // toggle the aria-hidden state of the given sidebar
      let sidebarState = sidebarElement.getAttribute('aria-hidden');
      sidebarElement.setAttribute('aria-hidden', sidebarState == 'true' ? false : true);
    }
  });
});
