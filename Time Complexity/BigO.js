 function exampleLogarithmic(n) {
     for (var i = 2 ; i <= n; i= i*2 ) {
     console.log(i);
 }
}

exampleLogarithmic(1000000)
/**
 * This function runs 19 times for 1,000,000 inputs. So its time
 * complexity follows the logrithmic tragectory 
 * If you evaluate n in this case you can roughly calculate that out
 * 
 * log2(1,000,000) === 19.9315686
 * 
 */