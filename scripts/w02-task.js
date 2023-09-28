/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "Jose Quemba";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const profilePicture = "images/mySelfM.jpg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById ("name");
const foodElement = document.getElementById ("food");
const yearElement = document.querySelector ("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.src = profilePicture;
imageElement.alt = `Profile image of ${fullName}`;

/* Step 5 - Array */
const favoriteFood = ["Mufete", "Muzungue", "Feijão de ole de palme",
"Salada fria", "Muamba de Galinha", "Beef Steak"];

foodElement.innerHTML = `<p>${favoriteFood}</p>`;

const faFood = "Chorrasco";

favoriteFood.push (faFood);

foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.shift ();

foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.pop ();

foodElement.innerHTML += `<br>${favoriteFood}`;

