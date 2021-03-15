$(document).ready(() => {
    $(".saveBtn").on("click", function() {
      
      let value = $(this).siblings(".description").val();
      let time = $(this).parent().attr("id");
  
      localStorage.setItem(time, value);
    });
  
    const hourUpdate = () => {
      
      let currentHour = moment().hours();
  
      $(".time-block").each(function() {
        let blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } 
        else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
  
    hourUpdate();
  
    let interval = setInterval(hourUpdate, 15000);
  
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  
    
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
  });
  