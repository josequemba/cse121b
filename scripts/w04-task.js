/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProject = {
    name: 'Jose Quemba',
    photo: "images/mySelfM.jpg",
    favoriteFoods: [
        'Mufete',
        'Muzungue',
        'Chorrasco',
        'Steak',
        'Spagetti'
    ],
    hobbies: [
        'Spend time with family',
        'Code',
        'play soccer games',
        'play board games',
        'watch fan videos',
        'watch movies'
    ]
};  

/* Populate Profile Object with placesLive objects */
myProject ['placesLived'] = ([
    {
        place: 'Luanda, Angola',
        length: '21 years'
    },
    {
        place: 'Pennsylvania, USA',
        length: 'less than a year'
    },
    {
        place: 'Maryland, USA',
        length: 'less than a year'
    },
    {
        place: 'Utah, USA',
        length: '3 years'
    }
]
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProject.name;

/* Photo with attributes */
document.querySelector ('#photo').src = myProject.photo;

/* Favorite Foods List*/
myProject.favoriteFoods.forEach(function (food){
    let newLiElement = document.createElement ('li');
    newLiElement.textContent = food;
    document.querySelector('#favorite-foods').appendChild (newLiElement);
});

/* Hobbies List */
myProject.hobbies.forEach( function (hobby) {
    let newliElement2 = document.createElement('li');
    newliElement2.textContent = hobby;
    document.querySelector('#hobbies').appendChild (newliElement2)
})

/* Places Lived DataList */
function placesLivedLayout (placesLivedArray) {
    const placesLength = placesLivedArray.map ((pL) => 
        `<dt><b>${pL.place}</b></dt>
        <dd><sup><small>${pL.length}</small></sup></dd>`
    );
    document.querySelector('#places-lived').innerHTML = placesLength.join("");
};

//let element = document.querySelector('');
//element.style.color = 'red';

placesLivedLayout (myProject.placesLived);


