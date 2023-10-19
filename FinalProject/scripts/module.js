
export let templeList = [];

const getTemples = async (url, displayTemples) => {
    const response = await fetch (url);

    if (response. ok)
    {
        templeList = await response.json ();

        displayTemples (templeList);
    }
}

/* sortBy Function */
export function sortBy (temples) {

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

/* reset Function */
export function reset (htmltemplesElement) {
    htmltemplesElement.innerHTML = "";
}

export default getTemples;
