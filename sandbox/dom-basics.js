const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const img = document.createElement("img");
img.setAttribute ("src", "https://picsum.photos/200");
img.setAttribute ("alt", "Casamento");
document.body.appendChild(img);

const newSect = document.createElement("section");
newSect.innerHTML = "<h2>CSE 121b</h2><section>Welcome to Javascript Language</section>";
document.body.appendChild(newSect);

const ward = `<strong>Home Ward</strong>: ${homeWard}`;
section.appendChild(h3);