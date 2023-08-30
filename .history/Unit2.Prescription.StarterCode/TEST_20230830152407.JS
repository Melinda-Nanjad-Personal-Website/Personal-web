const { getTotalCost, applyDiscount, applyCoupon } = require("../index.js");

describe("applyDiscount()", () => {
  it("applies a 25% discount if subscribed", () => {
    expect(applyDiscount(100, true)).toBe(75);
  });
  it("does not apply a discount if not subscribed", () => {
    expect(applyDiscount(100, false)).toBe(100);
  });
  it("handles zero cost", () => {
    expect(applyDiscount(0, true)).toBe(0);
  });
  it("handles negative cost", () => {
    expect(applyDiscount(-100, true)).toBe(-75);
  });
});

describe("applyCoupon()", () => {
  it("applies a $10 coupon", () => {
    expect(applyCoupon(90, true)).toBe(80);
  });
  it("does not apply a coupon if not used", () => {
    expect(applyCoupon(100, false)).toBe(100);
  });
  it("handles zero cost", () => {
    expect(applyCoupon(0, true)).toBe(-10);
  });
  it("handles negative cost", () => {
    expect(applyCoupon(-90, true)).toBe(-100);
  });
});

// More test cases ...
