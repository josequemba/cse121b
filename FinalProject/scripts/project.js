/* import modules */
import getTemples from "./module.js"
import templeList from "./module.js"
import reset from "./module.js"
import sortBy from "./module.js"

/* Declare and initialize global variables */

const urlTemples = "https://josequemba.github.io/cse121b/FinalProject/json/Temples.json";
const urlProfile = "https://josequemba.github.io/cse121b/FinalProject/json/Profile.json";
const urlClasses = "https://josequemba.github.io/cse121b/FinalProject/json/Classes.json";


let profileArray = [];
let classesList = [];

let templesElement = document.querySelector('#temples');
let classesElement = document.querySelector('#classes');

const displayTemples = (arrayBox) => {

    arrayBox.forEach((temple) =>
    {
        const articleElement = document.createElement('article');

        const h3Element = document.createElement('h3')
        h3Element.textContent += temple.templeName;

        const imgElement = document.createElement ('img');
        imgElement.setAttribute ('src', `${temple.imageUrl}`);
        imgElement.setAttribute ('alt', temple.templeName);
        imgElement.setAttribute ('width', "270em");

        articleElement.appendChild (h3Element);
        articleElement.appendChild (imgElement);
        templesElement.appendChild (articleElement);
    });
}; 

getTemples (urlTemples, displayTemples);



/* Event Listener */
//document.querySelector ('#sortBy').addEventListener("change", () => {sortBy(templeList)});
//getTemples ();
