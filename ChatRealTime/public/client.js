var socket = io.connect('http://localhost:4200');
socket.on('connect', (data) => {
    socket.emit('join', 'Hello server from client');
});

socket.on('thread', (data) => {
    $('#thread').append('<li>' + data + '</li>');
});

$('form').submit( () => {
    var message = $('#message').val();
    socket.emit('messages', message);
    this.clear();   //  reset bang nhap ve trang, ko con chu

    return false;
})  