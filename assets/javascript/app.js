
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

$('#submit').on('click', function(event){
  event.preventdefualt();
  //user input--
  var firstName=$('#inputfirstName').val().trim();


});



// to push to firebasse
database.ref().push({
  Name: firstName,

});


database.ref().on("child_added", function(childSnapshot, prevChildKey){

  console.log(childSnapshot.val());

  // assign firebase variables to snapshots
  var name = childSnapshot.val().Name;
});