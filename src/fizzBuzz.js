//Our solution,coudnt make the loop work,altough managed to print 1-100.

// var points = new Array(100);
//        for (var i = 0; i < 100; i++) {
//            points[i] = i + 1; //This populates the array.  +1 is necessary because arrays are 0 index based and you want to store 1-100 in it, NOT 0-99.
//        }
//
//        for (var i = 0; i < points.length; i++) {
//            console.log(points[i]); //This prints the values that you stored in the array
//        }
//
//        [points].map( function(item) {
//             if (item % 3 === 0){
//             console.log('Fizz');
//           }
//           })
//        //
//        // if  ( points % 3 == 0 ) {
//        //     console.log("Fizz");
//        //
//        // }else {
//        //     console.log("Y is higher");
//        //
//        // }
//        // // if (points (% 3 && % 5)) {        // logical condition
//        // //     console.log("FIZZBUZZ");               // executed if condition is true
//        // // } else {                                // else block is optional
//        // //     status = "Not eligible.";           // executed if condition is false
//        // // }
//Makers Solution:
function FizzBuzz() {
}

FizzBuzz.prototype.play = function(number) {
  if (this._isDivisibleBy(15, number)) {
    return 'FizzBuzz';
  } else if (this._isDivisibleBy(5, number)) {
    return 'Buzz';
  } else if (this._isDivisibleBy(3, number)) {
    return 'Fizz';
  } else {
    return number;
  }
}

FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
}

var fizzBuzz = new FizzBuzz();

for (var i = 1; i <= 100; i++) {
  console.log(fizzBuzz.play(i));
}
