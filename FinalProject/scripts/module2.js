
export const displayTemples = (arrayBox, html) => {

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
        html.appendChild (articleElement);
    });
}; 


export function displayClasses (arrayBoxs, htmlE) {

    const htmlElement = arrayBoxs.map(
        (arrayBox) => 
        `<tr><td>${arrayBox.code}</td>
        <td>${arrayBox.className}</td>
        <td>${arrayBox.status}</td>
        <td>${arrayBox.type}</td>
        <td>${arrayBox.description}</td></tr>`
      );
    htmlE.innerHTML = htmlElement.join (" ");
};

export function displayProfile1 (arrayBox, htmlE) {
    const image = arrayBox.map ((img) =>
        `<img src = ${img.profilepicture} alt = "Profile Picture">`);
    htmlE.innerHTML = image;
}

export function displayProfile2 (arrayBox, htmlE) {

    const htmlElement = arrayBox.map ((profile) =>
    `<ul><li>Name: ${profile.name}</li>
    <li>Date of Birth: ${profile.date_of_Birth}</li>
    <li>Major: ${profile.major}</li>
    </ul>`);
    htmlE.innerHTML += htmlElement;
}