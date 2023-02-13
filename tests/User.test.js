const User = require('../src/User')

describe('scooter methods', () => {
// User tests here

// test username

test("check to see if username is a string", () => {
  const userA = new User({
  username : "kev", 
  password : "abc123", 
  age : 22, 
  loggedIn : false,
  })
  
  expect(typeof userA.username).toBe("string");
});

// test password

// test age

test("check to see if age is a number", () => {
  const userB = new User({
  username : "bob", 
  password : "erb332", 
  age : 22, 
  loggedIn : false,
  })
  
  expect(typeof userB.age).toBe("number");
});

// test login

test("login - testing if password matches", () => {
    const user1 = new User({
    username : "kev", 
    password : "abc123", 
    age : 22, 
    loggedIn : false,
    })
    user1.login();
    expect(user1.loggedIn).toBe(true);
  });

// test logout
// needs fixed....
test("testing if loggedIN changes to false when logout is called", () => {
    const user1 = new User({
    username : "kev", 
    password : "abc123", 
    age : 22, 
    loggedIn : true,
    })
    user1.logout();
    expect(user1.loggedIn).toBe(false);
  });


})