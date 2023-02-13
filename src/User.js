class User {
  constructor(obj){
    this.username = obj.username; // is a string
    this.password = obj.password; // is a sting
    this.age = obj.age; // 
    this.loggedIn = obj.loggedIn// bollen
    }


    //If password is correct, logs the User in. If not, throws incorrect password error.
    login (){

    let pretendEnteredPassword = "abc123";

    if (pretendEnteredPassword === this.password){
      this.loggedIn = true;
      } else{
        throw new Error('password does not match');
    }
    }

    //Logs the User out.
    logout(){
      this.loggedIn = false;
    }
}

module.exports = User
