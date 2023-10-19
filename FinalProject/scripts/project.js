/* import modules */
import getTemples from "./module.js"
import displayTemples from "./module2.js"

import profileArray from "./module.js"
import classesList from "./module.js"
import templeList from "./module.js"

import reset from "./module.js"
import sortBy from "./module.js"

/* Declare and initialize global variables */

const urlTemples = "https://josequemba.github.io/cse121b/FinalProject/json/Temples.json";
const urlProfile = "https://josequemba.github.io/cse121b/FinalProject/json/Profile.json";
const urlClasses = "https://josequemba.github.io/cse121b/FinalProject/json/Classes.json";




let templesElement = document.querySelector('#temples');
let classesElement = document.querySelector('#classes');

getTemples (urlTemples, displayTemples, templesElement);



/* Event Listener */
//document.querySelector ('#sortBy').addEventListener("change", () => {sortBy(templeList)});
//getTemples ();
