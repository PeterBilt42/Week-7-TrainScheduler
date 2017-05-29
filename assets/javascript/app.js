  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCWbPnuteVhW5g7MTKxJy9o1F6UG4O_40c",
    authDomain: "week-7-trainscheduler-caa52.firebaseapp.com",
    databaseURL: "https://week-7-trainscheduler-caa52.firebaseio.com",
    // projectId: "week-7-trainscheduler-caa52",
    storageBucket: "week-7-trainscheduler-caa52.appspot.com",
    // messagingSenderId: "853103813882"
  };
  	// firebase.initializeApp(config);

  	// var database = firebase.database();

  database.ref().on('child_added',function(snapshot){
  	console.log('working');
  });