class Car {
  constructor(regnum) {
    this._regnum = regnum;
    this._hours = 0;
    this._charge = 0.0;
  }
  get regnum() {
    return this._regnum;
  }
  get hours() {
    return this._hours;
  }
  get charge() {
    return this._charge;
  }
  increaseHours() {
    this._hours++;
    this._charge += 1.5;
  }
}
const pay = (reg, hr) => {
  const car = new Car(reg);
  for (i = 0; i < hr; i++) {
    car.increaseHours();
  }
  return `You need to pay £${car._charge} for ${car._hours} hours.`;
};
console.log(pay('M7 CAR', 5)); //Output: You need to pay £7.5 for 5 hours.

class Staff extends Car {
  constructor(regnum, number) {
    super(regnum);
    this.staffNum = number;
    this.staffCredits = 25;
  }
  get num() {
    return this.staffNum;
  }
  get credit() {
    return this.staffCredits;
  }
  minusCredit() {
    this.staffCredits--;
  }
}
let Imran = new Staff('e123 mjg', 5);
// staffMem.staffNum;
// staffMem.staffCredits;

console.log(Imran);

const creditRemaining = (hours, member) => {
  for (let i = 0; i < hours; i++) {
    member.increaseHours();
  }
  console.log(member.hours); // grabbing this from the get function, remember you dont need parenthesis
  console.log(member.charge); // grabbing for the get function, remember you dont need parenthesis
  console.log(member._hours); // grabbing the value from the constructor function.
  console.log(member._charge); // grabbing the value from the constructor function.

  console.log(`You have been parked for ${member.hours} hours`);
  console.log(`You have ${member.staffCredits - member.charge} credits left`);
};
creditRemaining(2, Imran); // you have been parked for 2 hours // you have 22 credits left.
