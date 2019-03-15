let hobbiesArray=['Cooking', 'Reading', 'Travelling'];

function printHobbies(hobbies) {
    console.log(`I like ${hobbies.length} things:`);
    for(let i=0; i<hobbies.length; i++) {
        console.log(`I like ${hobbies[i]}`);
    }
}

printHobbies(hobbiesArray);