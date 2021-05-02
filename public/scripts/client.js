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

  socket.on('clickAnnounced', (hex, idNumber) => {
    console.log(idNumber);
    let hexToChange = $(`#${hex}`);
    changeColour(hexToChange);
  })
})

function changeColour(hex) {
  if (hex.hasClass('red')) {
    hex.removeClass('red');
    hex.addClass('blue');
  } else {
    hex.removeClass('blue');
    hex.addClass('red');
  }
}