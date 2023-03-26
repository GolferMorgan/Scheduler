// Wrapped all code using document.reday function
$(document).ready(function() {


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage

  //made the date and time show on page
  var today = dayjs();
  $('#time').text(today.format('dddd, MMMM D h:mm:ss'));
  //create variables for time and value
  //use parent and sibling .siblings to target description .value
  //target the id of the parent
  //save the attributes into local storage
  //https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem

    //added variable for local storage to grab


  //show a notification the item was stored
  //set timeout function for the notification

  // made hour blocks change colors based on time of day
  function colorChange() {
    // creating variable for current number of hours
    var currentTime = dayjs().hour();
    // looping over the time blocks
    // giving jquery a target
    $(".time-block").each(function() {
      
      // used parseInt method to return an integer
      // this is an element that recieved a function
      // added attr method on the object
      // used split method to divide the strings into an ordered list
      
      // created variable named hourIndex
      var hourIndex = parseInt($(this).attr("id").split(" ")[1]);
      // if else logic lines
      if (hourIndex < currentTime) {
        $(this).addClass("past")
      } else if (hourIndex === currentTime) {
        $(this).removeClass("past")
        $(this).addClass("present")
      } else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
      }
    })
  };
  // called the function and set the time interval
  colorChange()
  setInterval(colorChange, 1000);

  //added event listener using jquery .on method
  $(".saveBtn").on("click", function(){
    var hours = $(this).parent().attr("id")
    var input = $(this).siblings(".description").val();
    // added local storage so it would save the hour and the data put into each hour
    localStorage.setItem(hours, input);
    alert("Your appointment has been saved!")
    console.log(input);
  })
  //used jquery .each method
  //added get method to local storage to pull information stored back out when page is refreshed
  $(".row").each(function() {
    //used same attribute as above in 
    var content = $(this).attr("id")
    var pullContent = localStorage.getItem(content)
    //had to use .children instead of .siblings to get content to save and stay on page when refreshed
    $(this).children(".description").text(pullContent)
  })







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
