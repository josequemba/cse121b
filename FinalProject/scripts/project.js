/* import modules */
import {classesList, templeList, getTemples, reset} from "./module.js"

import {displayTemples, displayClasses, displayProfile1, displayProfile2} from "./module2.js"


/* Declare and initialize global variables */

const urlTemples = "https://josequemba.github.io/cse121b/FinalProject/json/Temples.json";
const urlProfile = "https://josequemba.github.io/cse121b/FinalProject/json/Profile.json";
const urlClasses = "https://josequemba.github.io/cse121b/FinalProject/json/Classes.json";


let templesElement = document.querySelector('#temples');
let classesElement = document.querySelector('#classes');
let profileElement = document.querySelector('#profile');


/* sortBy Function */
export function sortByTemple (templesEle) {

    reset (templesElement);

    const filter = document.querySelector ('#sortByTemple').value;

    switch (filter) {
        case "visited":
            displayTemples1((templesEle.filter(visit => visit.visit.includes("yes"))), htmlE);
            break;
        case "desired":
            displayTemples1((templesEle.filter(visit => visit.visit.includes("want"))), htmlE);
            break;
        case "all":
            displayTemples1(templesEle, htmlE);
            break;
        default:
            console.log("Invalid filter option");
    }
}


export function sortByClasses (classesL) {

    reset (classesElement);

    const filter = document.querySelector ('#sortByClasses').value;

    switch (filter) {
        case "completed":
            displayTemples(classesL.filter(classes => classes.status.includes("Taken")));
            break;
        case "current":
            displayTemples(classesL.filter(classes => classes.status.includes("Taking")));
            break;
        case "future":
            displayTemples(classesL.filter(classes => classes.status.includes("Not")));
            break;
        case "all":
            displayTemples(classesL);
            break;
        default:
            console.log("Invalid filter option");
    }
}

document.querySelector('#sortByClasses').addEventListener ("change", () => {sortByClasses(classesList)});
document.querySelector('#sortByTemple').addEventListener ("change", () => {sortByTemple (templeList, templesElement)});

getTemples (urlTemples, displayTemples, templesElement);
getTemples (urlClasses, displayClasses, classesElement);
getTemples (urlProfile, displayProfile1, profileElement);
getTemples (urlProfile, displayProfile2, profileElement);
