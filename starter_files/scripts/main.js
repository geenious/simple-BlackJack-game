/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  let sum = 0;
  for (let i = 0; i < hand.length; i++) {
    if (hand[i] === "A") {
      hand[i] = 11;
      sum += hand[i];
    }
    else if (hand[i] === "J" || hand[i] === "Q" || hand[i] === "K") {
    hand[i] = 10;
    sum += hand[i];
    }
    else {
    hand[i] = parseInt(hand[i]);
    sum += hand[i];
    }
  }
  if (sum > 21) {
    sum = 0;
    for (let i = 0; i < hand.length; i++) {
        if (hand[i] === 11) {
        hand[i] = 1;
        sum += hand[i];
      }
      else if (hand[i] === "J" || hand[i] === "Q" || hand[i] === "K") {
        hand[i] = 10;
        sum += hand[i];
      }
      else {
        hand[i] = parseInt(hand[i]);
        sum += hand[i];
      }
    }
  }
  return sum;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
