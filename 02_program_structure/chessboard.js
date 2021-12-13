let string=""
let size = 8;
for(let x = 0; x < size; x ++){
  for(let y = 0; y < size; y++){
    if((x + y) % 2 == 0) {
        string += " "
    } else {
      string += '#'
    }
  }
  string += '\n'
}

console.log(string)