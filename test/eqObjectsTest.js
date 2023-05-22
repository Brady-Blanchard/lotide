// require the chai assert func and tail function
const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

// TEST CODE
// initializing object variables to test equality
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

describe("#eqObjects", () => {
  // ensure objects with came keys and value evaluate to true 
  it("returns true for eqObjects(shirtObject, anotherShirtObject)", () => {
    assert.deepEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });
  // ensure that objects that are not equal if they have more keys 
  it("returns false for eqObjects(shirtObject, longSleeveShirtObject)", () => {
    assert.deepEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });
  // ensure that keys with arrays are also equal
  it(`returns true for eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)`, () => {
    assert.deepEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });
  // ensure thet objects are not equal if they have less keys 
  it(`returns false for eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)`, () => {
    assert.deepEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  });
});
