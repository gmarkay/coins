
function coinCounter (inNum) {
    amt = inNum *100;
 
    var coinPurse = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0

  };
  

  coinPurse.quarters = Math.floor(amt/25);
    amt = amt%25

  coinPurse.dimes = Math.floor(amt/10);
    amt = amt%10
    
  coinPurse.nickels = Math.floor(amt/5);
    amt =amt%5  

  coinPurse.pennies = Math.floor(amt/1);
    amt = amt%1 
    
    
  return coinPurse;
}


let input = prompt('Number any number');

if(!isNaN(input)){
  inNum = parseFloat(input);
  console.log(coinCounter(inNum))
}else{
alert('That was not a number!')
}



