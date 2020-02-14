function mirror(input) {
  var temp = input.split("").reverse().join("");
  return input + temp;
}

console.log(mirror('---ccv'));
