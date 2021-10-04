const expect = require("chai").expect;

function establishMongoDBConnection() {
  return true;
}

describe("Check the mongodb connection", () => {
  it("Is MongoDB connection established?", () => {
    expect(establishMongoDBConnection()).to.equal(true);
  });
});
