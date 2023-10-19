

const displayTemples = (arrayBox, html) => {

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

export default displayTemples;