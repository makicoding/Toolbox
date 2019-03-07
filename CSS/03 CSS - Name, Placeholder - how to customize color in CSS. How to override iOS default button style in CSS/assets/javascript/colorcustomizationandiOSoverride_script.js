console.log("JavaScript connected!");

// --------------------------------------------------------------------------------
// Handling of user input

var destination;
var units;
var travelDate;


var datePicker = function () {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left',                              // Can change this to left, center, or right
    timeZone: 'utc',
    autoApply: true                             // (true/false) Hide the apply and cancel buttons, and automatically apply a new date range as soon as two dates are clicked.
  }, function (start, end, label) {
    var dateArray = [];
    while (start <= end) {
      dateArray.push(moment(start).unix());
      start = (moment(start).add(1, 'days'));
    }
    travelDate = dateArray;
  });
}


var userInput = function () {
  userGender = $("#inputGender").val();
  destination = $("#inputLocation").val();
  units = $("#inputUnits").val();
  if (!userGender || !destination || !travelDate) {
    $("#missingInfoMessage").html("Please complete all required fields.");
  }
  else {
    handleSubmit();
  }
}


// ------------------------------



function handleSubmit() {
  window.open("https://www.amazon.com/"); 
}


$(document).ready(function () {
  datePicker();
  $('#buttonSubmit').click(userInput);
  $("#appContainer1").show();
});