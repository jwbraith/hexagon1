$(document).ready(() => {
  $('.hexagon').on("click", function () {
    if ($(this).hasClass('red')) {

      $(this).removeClass('red');
      $(this).addClass('blue');
    } else {
      $(this).addClass('red');
      $(this).removeClass('blue');
    }
  })
})