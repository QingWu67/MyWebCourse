let hobbiesArray =[
    {name: 'Cook', legnthInYearAtHobby: 10},
    {name: 'Read', legnthInYearAtHobby: 5},
    {name: 'Travel', legnthInYearAtHobby: 0}
];

function printHobby(hobby){
    console.log(`${hobby.name} enjoyed for ${hobby.legnthInYearAtHobby} years`);   
}

// for (let ii = 0; ii < hobbiesArray.length; ii++) {
//     printHobby(hobbiesArray[ii]);
// }

for(let hobby of hobbiesArray) {
    printHobby(hobby);
}


//bonus
let band1 = {
    name : "Pink Floyd",
    city : "London" ,
    country : "England",
    yearFormed : 1965,
    genres : ["Progressive rock", "psychedelic rock", "art rock"]
}
band1.genres = new Array("Progressive rock2", "psychedelic rock2", "art rock2");

let band2 = new Object();
band2.name ="Stephen Zhao";
band2.city = "Ellicott City";
band2.country = "U.S.";
band2.yearFormed = "2015";
band2.genres = new Array("I like music", "home town");

let band = [];
band.push(band1);
band.push(band2);

for (let h of band) {
    console.log(`${h.name}, ${h.city}, ${h.country}, ${h.yearFormed}, ${h.genres}`);   
}

