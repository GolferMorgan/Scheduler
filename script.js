
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage

  //made the date and time 
  var today = dayjs();
  $('#time').text(today.format('MMM D, YYYY h:mm:ss'));
//create variables for time and value
//use parent and sibling .siblings to target description .value
//target the id of the parent
//save the attributes into local storage
//https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
//show a notification the item was stored
//set timeout function
//load items from local storage getItem
$('#9 #description').val(localStorage.getItem("9"))
$('#10 #description').val(localStorage.getItem("10"))
$('#11 #description').val(localStorage.getItem("11"))
$('#12 #description').val(localStorage.getItem("12"))
$('#13 #description').val(localStorage.getItem("13"))
$('#14 #description').val(localStorage.getItem("14"))
$('#15 #description').val(localStorage.getItem("15"))
$('#16 #description').val(localStorage.getItem("16"))
$('#17 #description').val(localStorage.getItem("17"))



  //trying to make hour blocks change colors
  function colorChange() {
    // creating variable for current number of hours
    var currentTime = dayjs().hour()
    // looping over the time blocks
    // giving jquery a target
    $(".time-block").each(function () {
      // created variable named hourIndex
      // used parseInt method to return an integer
      // this is an element that recieved a function
      // added attr method on the object
      // used split method to divide the strings into an ordered list
      var hourIndex = parseInt($(this).attr("id").split(" ")[1]);
      // if else logic lines
      if (hourIndex > currentTime) {
        $(this).addClass("future")
      } else if (hourIndex === currentTime) {
        $(this).removeClass("future")
        $(this).addClass("present")
      }
      else {
        $(this).removeClass("future")
        $(this).removeClass("present")
        $(this).addClass("past")
      }
    })
  };
//
  colorChange();
  setInterval(colorChange, 1000);

  




  //added variable for local storage to grab
  // var saveAppInfo = {
  //   description: description.value,
  // };
  // // added the event listener for the save button
  // document.getElementById("saveBtn").addEventListener("click", function (event) {
  //   event.preventDefault();
  //   alert("Appointment added to your calendar!");
  //   console.log("your appointment has been added");
  //   localStorage.setItem("appointment", JSON.stringify(saveAppInfo));

  // });




  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
