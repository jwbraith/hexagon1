var socket = io();

$(document).ready(() => {

  $('.hexagon').attr('id', function (arr) {
    return "hex" + arr;
  });


  $('.hexagon').on("click", function (event) {
    console.log(event.target);
    console.log($(this).attr('id'));
    let clickedHex = $(this).attr('id');
    // SENDING THE MESSAGE TO OTHER SOCKET CONNECTIONS

    socket.emit('hexClick', clickedHex);

  })

  socket.on('clickAnnounced', (hex, idColour) => {
    console.log(idColour);
    let hexToChange = $(`#${hex}`);
    changeColour(hexToChange, idColour);
  })
})

function changeColour(hex, colour) {
  if (!hex.hasClass(colour)) {
    hex.css('background-color', colour);
  }
}