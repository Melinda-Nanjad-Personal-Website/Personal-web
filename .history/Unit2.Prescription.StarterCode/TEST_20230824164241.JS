/**@jest-environment jsdom */
const {
  getTotalCost,
  applyDiscount,
  applyCoupon,
  calculateCost,
} = require(`./index.js`);

describe('Prescription Cost Calculator', () => {
  // getTotalCost tests
  describe('getTotalCost', () => {
    it('calculates the total cost of refills', () => {
      expect(getTotalCost(10, 3)).toBe(30);//??
    });
  });

  describe("applyDiscount()", () => {
  it("applies a 25% discount when subscribed", () => {
    
  });

});
