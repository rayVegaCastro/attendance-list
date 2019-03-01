/*The user wants to know who is on time and who is late
and see the full list of students.
*/

//these are the variables for the Arrays//
var peopleLate = [];
var peopleOnTime = [];


//this button (Event listener) will log who is on time//
$("#onTimeBtn").on("click", function(){
  var personOnTime = $("#onTime").val();
  peopleOnTime.push(personOnTime);
  console.log(peopleOnTime);
  clearInputs();
});

//this button (Event listener) will log who is late//
$("#LateBtn").on("click", function(){
  var personLate = $("#Late").val();
  peopleLate.push(personLate);
  console.log(peopleLate);
  clearInputs();
});

//this button (Event listener) will Present all students who are on time//
$("#showAllOnTime").on("click", function(){
  $("#PresentList").html("<li>"+ peopleOnTime.join("</li><li>") +"</li>");
});

//this button (Event listener) will Present all students who are Late//
$("#showAllLate").on("click", function(){
    $("#LateList").html("<li>"+ peopleLate.join("</li><li>") +"</li>");
});

//this button (Event listener) will display all students logged into the seperate lists//
$("#show").on("click", function(){
  $("#showAll").html("<li>"+ peopleOnTime.concat(peopleLate).join("</li><li>") +"</li>");
});

/*this button (Event listener) will clear all/any lists displayed on the screen
*/
$("#clearAll").on("click", function(){
  $("#PresentList,#LateList,#showAll").html("");
  peopleOnTime = [];
  peopleLate = [];
});

//this function will clear inputs after the students name is submitted//
function clearInputs(){
  $("#Late").val("");
  $("#onTime").val("");
}
