
export let profileArray = [];
export let classesList = [];
export let templeList = [];

export const getTemplesEClasses = async (url, displayTemplesOrClasses, html) => {
    const response = await fetch (url);

    if (response. ok)
    {
        templeList = await response.json ();

        displayTemplesOrClasses (templeList, html);
    }
}

export const getTemplesEClassesfilter = async (url, displayTemplesOrClasses, elemFilter, html) => {
    const response = await fetch (url);

    if (response. ok)
    {
        templeList = await response.json ();

        displayTemplesOrClasses (templeList.filter(elemFilter), html);
    }
}

/* reset Function */
export function reset (htmltemplesElement) {
    htmltemplesElement.innerHTML = "";
}

