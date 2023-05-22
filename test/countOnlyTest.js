// require the chai assert func and countOnly function
const assert = require('chai').assert;
const countOnly = require('../countOnly.js');

// TEST CODE
// an array to use as the first parameter of countOnly
const firstNames = [
  "Karl",
  "Salima",
  "Agouthanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

//storing the results in a variable
const results = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouthanna": false });

describe("#countOnly", () => {
  //ensures that it counted Jason once
  it("returns 1 for results['Jason']", () => {
    assert.strictEqual(results["Jason"], 1);
  });
  //ensures that Karima is not in the list
  it("returns undefined for results['Karima']", () => {
    assert.strictEqual(results["Karima"], undefined);
  });
  //ensures Fang is counted and incremented
  it("returns 2 for results['Fang']", () => {
    assert.strictEqual(results["Fang"], 2);
  });
  //ensures that Agouthanna is not added due to the key being false
  it("returns undefined for results['Agouthanna']", () => {
    assert.strictEqual(results["Agouthanna"], undefined);
  });
});