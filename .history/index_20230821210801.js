
const root = document.getElementById("root");
Create an h1 element with the name of a famous piece of art: Mona Lisa.
Show Answer

const h1 = document.createElement("h1");
h1.innerHTML = "MONA LISA";
                    


Add (append) the h1 element to the root element.
Show Answer

root.appendChild(h1);
                    


Set the image asset and add this Links to an external site. image to the root element.
Show Answer

const img = document.createElement("img");
img.src = './assets/mona_lisa.jpg';
root.appendChild(img);
                    


Add a p element description to the root element. Description should read: The Mona Lisa is a famous painting. 
Show Answer

const p = document.createElement("p");
p.innerText = "The Mona Lisa is a famous painting."
root.appendChild(p);