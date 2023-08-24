// Import the necessary functions and objects from your index.js
const { users } = require("./index");
const fs = require("fs");

// Mock the document object
const mockDocument = {
  getElementById: jest.fn(() => ({
    appendChild: jest.fn(),
  })),
};

global.document = mockDocument;

// Load the main function from index.js and execute it
const { main } = require("./index");
main();

describe("Rendering data", () => {
  it("should render a list of users", () => {
    expect(mockDocument.getElementById).toHaveBeenCalledWith("root");
    expect(mockDocument.getElementById().appendChild).toHaveBeenCalledTimes(2);
    ~~``; // Once for h1, once for ul
    expect(
      mockDocument.getElementById().appendChild.mock.calls[0][0].tagName
    ).toBe("H1");
    expect(
      mockDocument.getElementById().appendChild.mock.calls[1][0].tagName
    ).toBe("UL");
    expect(
      mockDocument.getElementById().appendChild().appendChild
    ).toHaveBeenCalledTimes(users.length);
  });

  it("should render correct user data in li elements", () => {
    const liElements = mockDocument.getElementById().appendChild().appendChild
      .mock.calls;
    for (let i = 0; i < users.length; i++) {
      const liContent = liElements[i][0].textContent;
      const { name, age, occupation } = users[i];
      expect(liContent).toContain(name);
      expect(liContent).toContain(age);
      expect(liContent).toContain(occupation);
    }
  });
});
