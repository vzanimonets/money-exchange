// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  // Your code goes here!
  // Return an object containing the minimum number of coins needed to make change
  const result = {};
  const coins = {
    H: 50,
    Q: 25,
    D: 10,
    N: 5,
    P: 1
  };

  if (currency > 10000) {
    result.error =
      "You are rich, my friend! We don't have so much coins for exchange";
  } else {
    for (const key in coins) {
      while (currency >= coins[key]) {
        currency -= coins[key];
        if (isNaN(result[key])) {
          result[key] = 0;
        }
        result[key]++;
      }
    }
  }
  return result;
};
