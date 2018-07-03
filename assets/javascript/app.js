
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA_MbyX_3nLv0EUgmUyEJHspnEyEwI_3jc",
    authDomain: "eva-family-tree.firebaseapp.com",
    databaseURL: "https://eva-family-tree.firebaseio.com",
    projectId: "eva-family-tree",
    storageBucket: "",
    messagingSenderId: "97950860435"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

var tree = {
  id: "ME",   // Needs to be internally unique 
  name: "ME", // Visual label, does not need to match id 
  data: {},   // not really used here, but parameter needed
  children: [
    {id: "DAD", 
    name: "DAD", 
    data: {},
    children: [
      {id: "GrDAD1", 
      name: "GrDAD1", 
      data: {},
      children: []},
      {id: "GrMOM1", 
      name: "GrMOM1", 
      data: {},
      children: []},          
    ]},
    {id: "MOM", 
    name: "MOM", 
    data: {},
    children: [
      {id: "GrDAD2", 
      name: "GrDAD2", 
      data: {},
      children: []},
      {id: "GrMOM2", 
      name: "GrMOM2", 
      data: {},
      children: []},          
    ]}
  ]
};


$('#submit').on('click', function(){
  // event.preventdDefault();
  //user input--
  var firstName=$('#firstName').val().trim();
  var lastName=$('#lastName').val().trim();
  var email=$('#inputEmail4').val().trim();
  var password=$('#inputPassword4').val().trim();
  var address=$('#inputAddress').val().trim();
  var address2=$('#inputAddress2').val().trim();
  var city=$('#inputCity').val().trim();
  var state=$('#inputState').val().trim();
  var country=$('#inputCountry').val().trim();
  var zipCode=$('#inputZip').val().trim();

//   console.log(firstName);

// var newPerson= {name:firstName}
// // to push to firebasse
// database.ref().push(newPerson);
database.ref().push({
  Fname:firstName,
  Lname:lastName,
  
})


});




database.ref().on("child_added", function(childSnapshot, prevChildKey){

  console.log(childSnapshot.val());

  // assign firebase variables to snapshots
  var firstName = childSnapshot.val().fname;

//   var newName= $('<div>');
//  newName.html(name);
//  console.log(name);

// $('#idName').append(newName);
$('#idName').append(firstName);



});