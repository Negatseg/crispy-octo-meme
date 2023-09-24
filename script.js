
document.addEventListener("DOMContentLoaded", function () {
  const currentDate = new Date();

  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  document.getElementById("currentDay").textContent = formattedDate;
});


document.addEventListener("DOMContentLoaded", function () {
  updateHourStyles();

  // Update styles every minute to account for changes in time
  setInterval(updateHourStyles, 3600000);

  function updateHourStyles() {
      // Get the current hour
      const currentHour = new Date().getHours();

      // Loop through each time-block div
      const timeBlocks = document.querySelectorAll(".time-block");
      timeBlocks.forEach(function (timeBlock) {
          const hour = parseInt(timeBlock.id.split("-")[1]);

          // Remove all classes (past, present, future)
          //timeBlock.classList.remove("past", "present", "future");

          // Add the appropriate class based on the current hour
          if (hour < currentHour) {
              timeBlock.classList.add("past");
          } else if (hour === currentHour) {
              timeBlock.classList.add("present");
          } else {
              timeBlock.classList.add("future");
          }
      });
  }
});










const saveButtons = document.querySelectorAll('saveBtn')

saveButtons.forEach(button => {
  button.addEventListener('click', function() {
    const timeBlock = this.closest('.time-block');
    const timeBlockId = timeBlock.id;

  
    const userInput = timeBlock.querySelector('textarea').value;
    localStorage.setItem(timeBlockId, userInput);
    const storedText = localStorage.getItem(timeBlockId, userInput);
    userInput.value = storedText;
  });
});

//function displayEvents() {
 // const eventText = timeBlock.querySelector('textarea').value;

 // const events = JSON.parse(localStorage.getItem('eventText'));

  //}

//displayEvents();


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
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
