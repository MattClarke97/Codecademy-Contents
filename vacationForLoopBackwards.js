var vacationSpots = ["London","New York","Berlin"];

for (var i = vacationSpots.length - 1; i >= 0; i--){  //java counts from zero so -1 is needed to stop giving an "undefined" output
  console.log("I would love to visit " + vacationSpots[i] + ".");
}
