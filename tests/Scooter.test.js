const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object


// describe('scooter object', () => {
//   test('does something', () => {
//     // edit this to be a real test!
//     expect(false).toEqual(true);
//   }
// )
// })

//Method tests
describe('scooter methods', () => {
  // tests here!

  // let scooter1 = new Scooter("east" ,"kev", 123, null, 2, true)
  // test("instance has correct properties", () => {
  //   expect(scooter1).toHaveProerty("user");
  //   expect(scooter1).toHaveProerty("charge");
  //   expect(scooter1).toHaveProerty("serial");
  //   expect(typeof scooter1).toHaveProerty("booleen");
  //   expect(scooter1.station).toHaveProerty("east");
  // })

  //rent method
  test("test if rent", () => {
    const scooter1 = new Scooter({
      station : "east",
      user : "kev",
      serialNum : "123",
      nextSerialNum : null,
      charge : 22,
      isBroken : false 
    })
    scooter1.rent();
    expect(scooter1.station).toBe(null);
  });
 
  //dock method
  test("test if docked - user delted", () => {
    const scooter2 = new Scooter({
      station : "east",
      user : "kev",
      serialNum : "123",
      nextSerialNum : null,
      charge : 22,
      isBroken : false 
    })
    scooter2.dock();
    expect(scooter2.user).toBe(null);
  });

  test("test if docked - station added", () => {
    const scooter3 = new Scooter({
      station : "north",
      user : "kev",
      serialNum : "123",
      nextSerialNum : null,
      charge : 22,
      isBroken : false 
    })
    scooter3.dock();
    expect(scooter3.station).toBe("north");
  });
  //requestRepair method

  test("test if needing repair - repair needed", () => {
    const scooter4 = new Scooter({
      station : "east",
      user : "kev",
      serialNum : "123",
      nextSerialNum : null,
      charge : 22,
      isBroken : true 
    })
    scooter4.requestRepair()
    expect(scooter4.isBroken).toBe(false);
  });

  //charge method
  test("test charging to 100", () => {
    const scooter5 = new Scooter({
      station : "east",
      user : "kev",
      serialNum : "123",
      nextSerialNum : null,
      charge : 10,
      isBroken : false 
    })
    scooter5.recharge();
    expect(scooter5.charge).toBe(100);
  });

 

})
