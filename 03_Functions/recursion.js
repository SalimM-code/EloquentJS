const isEven = (num) => {
  // base case
  if (num === 0){
    return true;
  } else if (num === 1){
    return false;
  }
  // recursive case
  return isEven(num -2);

}

console.log(isEven(50))