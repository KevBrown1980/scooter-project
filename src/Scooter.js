class Scooter {

  constructor(obj)
{
    this.station = obj.station; //station;//string; the station the scooter is located at, or null if checked out
    this.user = obj.user; //this possshould be username
    this.serialNum = obj.serialNum;// a number assigned sequentially from nextSerial
    this.nextSerialNum = obj.nextSerialNum;//a static number which starts at 1 and increments each time a new serial number is assigned
    this.charge = obj.charge; // num 0 - 100
    this.isBroken = obj.isBroken; // a bool
}


//If the Scooter is charged above 20% and not broken, remove it from its station, check it out to user. 
//Otherwise, throw an error scooter needs to charge or scooter needs repair.
rent() {
  if (this.charge < 21) {
    //throw an error - scooter needs charged
    throw new Error('scooter needs charged');
  } else if (this.isBroken === true) {
    //throw an error - scooter needs repair
    throw new Error('scooter needs repair');
  } else {
    //remove it from its station
    this.station = null;
    
    return this.station;
  }
}

//Return the scooter to the station. Be sure to clear out the user, so they don’t get charged unfairly!
dock(station) {
  //Return the scooter to the sataion
  
  // clear out user 
  this.user = null;

}

//BONUS: Set a timer to incrementally update the Scooter’s charge to 100. 
//Every so often, log the new percentage of charge.
recharge() {
  console.log('Starting charge');
  this.charge = 100
  console.log('Charge complete'); 
  console.log(this.charge)
  return this.charge  
}


//BONUS: Use a setInterval timer to schedule a repair in 5 seconds.
//When time elapses, set isBroken to false and log repair completed to the console.
requestRepair() {
  if (this.isBroken === true){
    console.log('Starting to fix');
    console.log('Fix is complete'); 
    this.isBroken = false
    return this.isBroken
  }
  else {
    console.log ("Scooter is not broken");
    return ("Scooter is not broken")
  }



 }
}
module.exports = Scooter
