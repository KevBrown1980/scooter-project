const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here

//this is an obj
//stations: An object whose keys are the names of station locations, and whose values are arrays of Scooters. 
//You can hard-code these stations in the constructor. There should be at least three. Initially, there are no scooters at any stations.
  constructor (username, password, age){
this.stations = {
  eastStation : ["scooter1", "scooter2", "scooter3", "scooter4"],
  northStation : ["scooter5", "scooter6", "scooter7" , "scooter8"],
  westStation : ["scooter9", "scooter10", "scooter11", "scooter12"],
  southStation : ["scooter13", "scooter14", "scooter15"]
} 
 
//this is an object
    //An object whose keys are usernames to store all users 
    this.registeredUsers = {}
    }


  


  //If the user is not already registered AND is 18 or older, then add them as a new registered user. 
  //Log to the console that the user has been registered and return the user.
  //If the user cannot be registered, throw an error: already registered or too young to register.
registerUser(username, password, age){
  
  if (age >= 18){
    const newUser = {
      username : username,
      password : password,
      age : age,
    }
    console.log("new user details ... " + username + " " + password + " " +age);
    return newUser;
  }
    else {
      return "user is too young"
    }

  }


//Locate the registered user by name and call its login method. Log to the console that the user has been logged in. 
//If the user cannot be located or if the password is incorrect, then throw an error: Username or password is incorrect.
loginUser(username, password){

}

//Locate the registered user and call its logout method. Log user is logged out to the console.
//If the user cannot be located, throw no such user is logged in error
logoutUser(username){
  // not sure if this rigth
User.logout(username)
}


//This method is called by the Scooter company’s home office when new scooters are deployed. 
//Create a new scooter, add it to the station’s scooter list, and set its station property. 
//Log created new scooter to the console. Return the scooter. 
//Throws no such station error if the station does not exist. 
createScooter(station){
  Scooter

}

// Locate the given scooter at one of the stations, and remove it from that station. Rent it to the user. 
// Log scooter is rented to the console. 
// If the scooter is already rented, throw the error scooter already rented.
dockScooter(scooter, user){

}


//Locate the given scooter at one of the stations, and remove it from that station. 
//Rent it to the user. Log scooter is rented to the console. 
//If the scooter is already rented, throw the error scooter already rented.
rentScoooter (scooter, user){

}


// You will use this handy method when testing your ScooterApp.
// Log the list of registered users to the console.
// Log the list of stations and how many scooters are at each station to the console.
// Take a moment to format it nicely so you can read it.
print(){
  console.log("list of registered users:")
  console.log(this.registeredUsers)
  console.log("Stations and how many scooters:")
  console.log(this.stations)  
}

}


module.exports = ScooterApp

