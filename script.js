
document.addEventListener("DOMContentLoaded", function () {
  const currentDate = new Date();

  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  document.getElementById("currentDay").textContent = formattedDate;
});


document.addEventListener("DOMContentLoaded", function () {
  updateHourStyles();

  
  setInterval(updateHourStyles, 3600000);

  function updateHourStyles() {

      const currentHour = new Date().getHours();

      
      const timeBlocks = document.querySelectorAll(".time-block");
      timeBlocks.forEach(function (timeBlock) {
          const hour = parseInt(timeBlock.id.split("-")[1]);

          
          timeBlock.classList.remove("past", "present", "future");

          
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


$(".saveBtn").on('click',function() {
  const timeBlock = this.closest('.time-block');
  const timeBlockId = timeBlock.id;


  const userInput = timeBlock.querySelector('textarea').value;
  localStorage.setItem(timeBlockId, userInput);
})

$('#hour-9 .description').val(localStorage.getItem('hour-9'))
$('#hour-10 .description').val(localStorage.getItem('hour-10'))
$('#hour-11 .description').val(localStorage.getItem('hour-11'))
$('#hour-12 .description').val(localStorage.getItem('hour-12'))
$('#hour-13 .description').val(localStorage.getItem('hour-13'))
$('#hour-14 .description').val(localStorage.getItem('hour-14'))
$('#hour-15 .description').val(localStorage.getItem('hour-15'))
$('#hour-16 .description').val(localStorage.getItem('hour-16'))
$('#hour-17 .description').val(localStorage.getItem('hour-17'))






