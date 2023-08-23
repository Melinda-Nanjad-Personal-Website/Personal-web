//innerHTML sets the actual HTML content
//
heading.innertext = NAME;
const para2 = document.createElement("p");
para2.innertext = DOGGO_TEXT;
ShadowRoot.insertBefore(para2, paragraph);

// Add a button
const btn = document.createElement("button");
btn.innertext = "Click me!";
btn.className = "purple";
