//---------------about page-----------//
document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM content to be loaded

  // Get the element with the class "header-text"
  let headerText = document.querySelector(".header-text");

  // After 10 seconds, show the element
  setTimeout(function () {
    headerText.style.display = "block";
  }, 10000); // 10000 milliseconds = 10 seconds
});

//to set the day and time on the footer section
document.addEventListener("DOMContentLoaded", function () {
  // Get the element with the ID "datetime"
  let datetimeElement = document.getElementById("datetime");

  // Update the content with the current date and time
  updateDatetime(datetimeElement);

  // Update the date 
  setInterval(function () {
    updateDatetime(datetimeElement);
  }, 1000);
});

function updateDatetime(element) {
  let currentDate = new Date();
  let options = { year: "numeric", month: "long", day: "numeric" };
  let formattedDate = currentDate.toLocaleDateString("en-US", options);

  // Update the content of the element with the formatted date
  element.textContent = formattedDate;
  

}



