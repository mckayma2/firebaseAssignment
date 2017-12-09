// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
 
	
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBsqjsWufoByR79LHN1vrRCS27_J4dxk0M",
    authDomain: "train-scheduler-8e2d3.firebaseapp.com",
    databaseURL: "https://train-scheduler-8e2d3.firebaseio.com",
    projectId: "train-scheduler-8e2d3",
    storageBucket: "",
    messagingSenderId: "316913363679"
  };
  firebase.initializeApp(config);


var database = firebase.database();

amount.push ({
   
     Amount: clicked,
      name0 : {

      	firstName: firstName,
     	lastName: lastName
      },
      name1 : {

      	firstName: firstName,
     	lastName: lastName
     }
   
});



});

var ref = database.ref();

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
   console.log(snapshot.val().clicking.Amount);
var arrdb = snapshot.val().clicking;

var search = 'mario';
var result =[];

for (var i =0; i<arrdb.length; i++){

  var key = arrdb.indexOf(search)
  console.log('arrdb' + key);
  if(key != -1){console.log("yeh")}
    console.log(key);
}

console.log('arrdb' + arrdb[i]);

});


});

