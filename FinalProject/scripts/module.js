
export let profileArray = [];
export let classesList = [];
export let templeList = [];

export const getTemples = async (url, displayTemples, html) => {
    const response = await fetch (url);

    if (response. ok)
    {
        templeList = await response.json ();

        displayTemples (templeList, html);
    }
}

/* reset Function */
export function reset (htmltemplesElement) {
    htmltemplesElement.innerHTML = "";
}

