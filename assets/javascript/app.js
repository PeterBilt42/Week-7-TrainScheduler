$(document).ready(function() {
	
	  // Initialize Firebase
   var config = {
    apiKey: "AIzaSyCWbPnuteVhW5g7MTKxJy9o1F6UG4O_40c",
    authDomain: "week-7-trainscheduler-caa52.firebaseapp.com",
    databaseURL: "https://week-7-trainscheduler-caa52.firebaseio.com",
    projectId: "week-7-trainscheduler-caa52",
    storageBucket: "week-7-trainscheduler-caa52.appspot.com",
    messagingSenderId: "853103813882"
  };
  	firebase.initializeApp(config);

var database = firebase.database();
console.log(database);
var name ='';
var destination = '';
var firstTrainTime = '';
var frequency = '';
var nextTrain = '';
var nextTrainFormatted = '';
var minutesAway = '';
var firstTimeConverted = '';
var currentTime = '';
var diffTime = '';
var tRemainder = '';
var minutesTillTrain = '';
var keyHolder = '';
var getKey = '';





	console.log("working")
    




    $("#testButton").on("click", function() {
    	console.log("we got it!")
     	name = $('#name-input').val().trim();
     	destination = $('#destination-input').val().trim();
     	firstTrainTime = $('#time-input').val().trim();
     	frequency = $('#frequency-input').val().trim();
        firstTimeConverted = moment(firstTrainTime, "hh:mm").subtract(1, "years");
        currentTime = moment();
        diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        tRemainder = diffTime % frequency;
        minutesTillTrain = frequency - tRemainder;
        nextTrain = moment().add(minutesTillTrain, "minutes");
        nextTrainFormatted = moment(nextTrain).format("hh:mm");
        console.log(name,destination,firstTrainTime);
     	




		database.ref().push({
     		name: name,
     		destination: destination,
     		firstTrainTime: firstTrainTime,  
     		frequency: frequency,
               nextTrainFormatted: nextTrainFormatted,
               minutesTillTrain: minutesTillTrain
     	});

        $('#name-input').val('');
     	$('#destination-input').val('');
     	$('#time-input').val('');
     	$('#frequency-input').val('');

     	return false;
     });
     database.ref().on("child_added", function(snapshot) {

		$('.table').append("<tr' id=" + "'" + snapshot.key() + "'" + ">" +
               "<th>" + snapshot.val().name +
               "</th>" +
               "<th>" + snapshot.val().destination +
               "</th>" +
               "<th>" + snapshot.val().frequency +
               "</th>" +
               "<th>" + snapshot.val().nextTrainFormatted + 
               "</th>" +
               "<th>" + snapshot.val().minutesTillTrain + 
               "</th>" +
               "<th>" + "<input type='submit' value='remove train' class='remove-train btn btn-primary btn-sm'>" + "</td>" +
          "</tr>");
// Handle the errors
}, function(errorObject){
	//console.log("Errors handled: " + errorObject.code)
});

// $("#submit").on("click", ".remove-train", function(){
//      $(this).closest ('tr').remove();
//      getKey = $(this).parent().parent().attr('id');
//      database.child(getKey).remove();
// });

});