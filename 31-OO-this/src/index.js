const car1 = {
  make: "Toyota",
  model: "camry",
  serial_number: "1234",
  start: function start() {
    console.log();
  }
};
// const car2 = { make: "Toyota", model: "camry", serial_number: "1234" };
// const car2 = { make: "Toyota", model: "camry", serial_number: "1234" };
// const car2 = { make: "Toyota", model: "camry", serial_number: "1234" };
// const car2 = { make: "Toyota", model: "camry", serial_number: "1234" };
// const car2 = { make: "Toyota", model: "camry", serial_number: "1234" };
// const car2 = { make: "Toyota", model: "camry", serial_number: "1234" };
// const car2 = { make: "Toyota", model: "camry", serial_number: "1234" };
// //

// Factory Function:
// function carFactory(make, model, serial_number) {
//   const car = {
//     make: make,
//     model: model,
//     serial_number: serial_number,
//     start: function() {
//       console.log(`Serial Number:${this.serial_number}`);
//     }
//   };
//   return car;
// }
//
// car2 = carFactory("toyota", "camry", "12345556");
// car3 = carFactory("nissan", "maxima", "1992");
//
// car2.start === car3.start;

// Prototypical Inheritance:
// const carTemplate = {
//   make: null,
//   model: null,
//   start: function() {
//     console.log("sitting");
//   }
// };
//
// car4 = Object.create(carTemplate);
// car4.make = "toyota"
// car4.model
// Constructor Functions:
//
function carFactory(make, model, serial_number) {
  (this.make = make),
    (this.model = model),
    (this.serial_number = serial_number),
    carFac;
}
carFactory.prototype.start = function() {
  console.log(`Serial Number: ${this.serial_number}`);
};

// JS Class:
class Car {
  constructor(make, model, serial_number) {
    (this.name = name),
      (this.model = model),
      (this.serial_number = serial_number),
      Car.carsArray.push(this);
  }

  start() {
    console.log(`Serial Number: ${this.serial_number}`);
  }

  static cars() {
    console.log(`${Car.carsArray.length} cars were created`);
  }
}

Car.carsArray = [];
Car.cars;

car5 = new Car();
// practically invokes Object.create()
//
// console.log("global", this);
//
// [(1, 2, 3)].forEach(() => {
//   console.log("iterator this", this);
// });
//
// const evansIsRidic = {
//   name: "Tashawn",
//   key: function evans() {
//     console.log("evans is ridic this", this);
//   }
// };
