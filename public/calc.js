function sum (x,y){
  return x + y;
}
function multiply (x,y){
  return x*y;
}
function divide(x,y){
  return x/y;
}
function subtract(x,y){
  return x-y;
}
module.exports = function (x,y, requesttype){
  switch(requesttype){
    case 'sum' :{
      return sum(x,y);
    }
    case 'subtract' :{
      return subtract(x,y);
    }
    case 'divide' :{
      return divide(x,y);
    }
    case 'multiply' :{
      return multiply(x,y);
    }
    default :{
      return sum(x,y);
    }
  }
}
