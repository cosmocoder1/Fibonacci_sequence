// function which returns number in Fibonacci sequence at given index

const fibonacci = function(input) {

  input = Number.parseInt(input);
  
  let number1 = 0;
  let number2 = 1;
  let sum;
  
  
  if (input < 0) {
    return 'OOPS';
  }
  
  if (input === 1) {
    return 1;
  }
  
  
  for (let i = 0; i < (input - 1); i++) {
    
    sum = number1 + number2;
    number1 = number2;
    number2 = sum;
  }
  
  return sum;
  }


  