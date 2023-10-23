// Object Destructuring ;

const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
  var1: "Aditya",
};

// console.log(band.bandName, band.famousSong);

let {var1: name, bandName, ...rest} = band;
console.log(name);
