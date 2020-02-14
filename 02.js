function reverse(input) {

  var arr = input.split(" ");

  arr.reverse();

  input = arr.join(" ");
  
  return input;
}

console.log(reverse('saya ingin makan nasi goreng'));
