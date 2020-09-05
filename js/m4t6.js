const Guest = function (name, room) {
  this.name = name;
  this.room = room;
};

console.log(Guest.prototype); // {constructor: ƒ}
const mango = new Guest('Mango', 28);

console.log(mango);
