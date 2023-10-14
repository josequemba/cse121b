/* W05: Programming Tasks */

/* Declare and initialize global variables */
let templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {

    temples.forEach((temple) =>
    {
        const articleElement = document.createElement('article');
        //articleElement.style.backgroundColor = "";

        const h3Element = document.createElement('h3')
        h3Element.textContent += temple.templeName;

        const imgElement = document.createElement ('img');
        imgElement.setAttribute ('src', `${temple.imageUrl}`);
        imgElement.setAttribute ('alt', temple.templeName);
        imgElement.setAttribute ('width', "270em");
        //imgElement.setAttribute ('height', "400");

        articleElement.appendChild (h3Element);
        articleElement.appendChild (imgElement);
        templesElement.appendChild (articleElement);
    });
}; 
/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch ('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');

    if (response. ok)
    {
        templeList = await response.json ();
    
        displayTemples (templeList);
    }
}


/* reset Function */
function reset () {
    templesElement.innerHTML = "";
}

/* sortBy Function */
function sortBy (temples) {

    reset ();

    const filter = document.querySelector ('#sortBy').value;

    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temp => temp.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temp => !temp.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temp => new Date(temp.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
            console.log("Invalid filter option");
    }
}

/* Event Listener */
document.querySelector ('#sortBy').addEventListener("change", () => {sortBy(templeList)});
getTemples ();
