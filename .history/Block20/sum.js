/**
 * @jest-environment jsdom
 */
//use tobe and expect a value of 17 LuckyNumber
expect(LuckyNumber(5, 12)).toBe(17);

//not.tobe
expect(GetmeNumber(7, 12));

expect(total(5.51021, 4.01123)).toBeCloseTo(9.52);

expect(forSale).toHaveProperty(["kitchen", "nice.oven"]);
expect(forSale).toHaveProperty(["kitchen", "amenities", 0], "oven");
