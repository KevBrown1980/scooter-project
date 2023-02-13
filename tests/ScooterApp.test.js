const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe('scooter methods', () => {
// register user

test("we can add new user to an object called newUser", () => {
    const scooterApp1 = new ScooterApp()
    expect(scooterApp1.registerUser("kevin", "abc123", 99))===({"username":"kevin","password":"abc123","age":99})
});
 


// log in

// log out

// rent scooter

// dock scooter

// print scooter
// test("checking print() function workingand can be called", () => {
//     const scooterApp1 = new ScooterApp()
//     scooterApp1.registerUser("kevin", "abc123", 99);
//     expect(print()).toBe("printed");
// });

})
