$(document).ready(function () {
  var now = moment().format("MMMM Da YYYY, h:mm:ss a");
  $("#currentDay").text(now);

  //1.on clikc function for save button to save the message into local storage
  // 2.based on block hour and compared to current hour on js create if and else statements for different blocks class color
  // 3.get all the messages from local storage and add to text area

  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    localStorage.setItem(time, text);
  });

  $('#9 .description').val(localStorage.getItem('9'));
  $('#10 .description').val(localStorage.getItem('10'));
  $('#11 .description').val(localStorage.getItem('11'));
  $('#12 .description').val(localStorage.getItem('12'));
  $('#13 .description').val(localStorage.getItem('13'));
  $('#14 .description').val(localStorage.getItem('14'));
  $('#15 .description').val(localStorage.getItem('15'));
  $('#16 .description').val(localStorage.getItem('16'));
  $('#17 .description').val(localStorage.getItem('17'));

  function updateColor() {
      var currentHour = moment().hours();

      $(".time-block").each(function(){
          var blockHour = parseInt($(this).attr('id'));

          if (blockHour < currentHour) {
              $(this).addClass('past');
          } else if(blockHour === currentHour) {
              $(this).removeClass('past');
              $(this).addClass('present');
          } else {
              $(this).removeClass('past');
              $(this).removeClass('present');
              $(this).addClass('future');
          }
      })
      
  }

  updateColor();

});
