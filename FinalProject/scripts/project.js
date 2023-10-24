/* import modules */
import {classesList, templeList, getTemplesEClasses, reset, getTemplesEClassesfilter} from "./module.js"

import {displayTemples, displayClasses, displayProfile1, displayProfile2} from "./module2.js"


/* Declare and initialize global variables */

const urlTemples = "https://josequemba.github.io/cse121b/FinalProject/json/Temples.json";
const urlProfile = "https://josequemba.github.io/cse121b/FinalProject/json/Profile.json";
const urlClasses = "https://josequemba.github.io/cse121b/FinalProject/json/Classes.json";


let templesElement = document.querySelector('#temples');
let classesElement = document.querySelector('#classes');
let profileElement = document.querySelector('#profile');


/* sortBy Function */
export function sortByTemple () {

    reset (templesElement);

    const filter = document.querySelector ('#sortByTemple').value;

    switch (filter) {
        case "visited":
            getTemplesEClassesfilter(urlTemples, displayTemples, visit => visit.visit.includes("yes"), templesElement);
            break;
        case "desired":
            getTemplesEClassesfilter(urlTemples, displayTemples, visit => visit.visit.includes("want"), templesElement);
            break;
        case "all":
            getTemplesEClasses (urlTemples, displayTemples, templesElement);
            break;
        default:
            console.log("Invalid filter option");
    }
}


export function sortByClasses () {

    reset (classesElement);

    const filter = document.querySelector ('#sortByClasses').value;

    switch (filter) {
        case "completed":
            getTemplesEClassesfilter(urlClasses, displayClasses, classes => classes.status.includes("Taken"), classesElement);
            break;
        case "current":
            getTemplesEClassesfilter(urlClasses, displayClasses, classes => classes.status.includes("Taking"), classesElement);
            break;
        case "future":
            getTemplesEClassesfilter(urlClasses, displayClasses, classes => classes.status.includes("Not"), classesElement);
            break;
        case "all":
            getTemplesEClasses (urlClasses, displayClasses, classesElement);
            break;
        default:
            console.log("Invalid filter option");
    }
}

document.querySelector('#sortByClasses').addEventListener ("change", () => {sortByClasses(classesList)});
document.querySelector('#sortByTemple').addEventListener ("change", () => {sortByTemple (templeList)});

getTemplesEClasses (urlTemples, displayTemples, templesElement);
getTemplesEClasses (urlClasses, displayClasses, classesElement);
getTemplesEClasses (urlProfile, displayProfile1, profileElement);
getTemplesEClasses (urlProfile, displayProfile2, profileElement);

const bio = ["Through my Associate degree in administration and \
accounting and now pursuing a bachelor's degree in Web and software \
development, I have great experience in business administration and \
management, with more than 20 projects made through coding in Python, \
HTML, CSS, JavaScript, and C# language and solving different problem \
with it. I’ve got a lot of skills I can assist and work hard within \
any team project assigned to me."];

profileElement.innerHTML += bio.map(hob => `<b>Bio:</b>${hob}</b>`); 
