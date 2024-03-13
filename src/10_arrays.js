var oscars2024 = [
    "Oppenheimer",
    "Anatomy of a fall",
    "Poor things",
    "Barbie",
    "The zone of interest",
    "American fiction",
    "Killers of the flower moon"
];

//OLD way of looping through an array
// for (var i = 0; i < oscars2024.length; i++) { }

//If you REALLY wanted to get the index, use [for var "IN" arr]
for (var i in oscars2024) {}

//BETTER Directly get the items in the array
for(var movie of oscars2024) {
    //console.log(movie);
}

//BUT even better to use *** forEach *** (function(){...})
//  Does NOT return anything after each function invocation. Just iterates over the array.
oscars2024.forEach((movie, index) => {
    console.log(`Movie: ${index+1}`, movie);
});

//*** EVERY ***  => Return true to iterate over ALL elements. Conditionally return false to stop at any point.
//            array.every(function(currentValue, index, arr), thisValue) 
//                   thisValue=Default undefined. A value passed to the function as its this value.
// Unlike forEach, does return a boolean value after EACH function invocation.
oscars2024.every(movie => {
    console.log("In EVERY -> ", movie);
    if(movie === "Barbie") //Will stop at "Barbie"
        return false;
    return true; 
});

// ========= 2 Dimensional Array of Movie Objects - With Nominations and Wins =============
// ------ USING ENUMS ------
const NOMINATIONS = {
    "PICTURE": Symbol("Best Picture"),
    "ACTOR": Symbol("Best Actor"),
    "ACTRESS": Symbol("Best Actress"),
    "DIRECTOR": Symbol("Best Director"),
    "SUPPORTING_ACTOR": Symbol("Best Supporting Actor"),
    "SUPPORTING_ACTRESS": Symbol("Best Supporting Actress"),
    "ANIMATED_FEATURE": Symbol("Best Animated Feature"),
    "FOREIGN_LANGUAGE_FILM": Symbol("Best Foreign Language Film"),
    "DOCUMENTARY": Symbol("Best Documentary"),
    "ORIGINAL_SCREENPLAY": Symbol("Best Original Screenplay"),
    "ADAPTED_SCREENPLAY": Symbol("Best Adapted Screenplay"),
    "CINEMATOGRAPHY": Symbol("Best Cinematography"),
    "COSTUME_DESIGN": Symbol("Best Costume Design"),
    "FILM_EDITING": Symbol("Best Film Editing"),
    "SCREENPLAY": Symbol("Best Screenplay"),
    "SOUND": Symbol("Best Sound"),
    "VISUAL_EFFECTS": Symbol("Best Visual Effects"),
    "MAKEUP": Symbol("Best Makeup"),
    "ORIGINAL_SCORE": Symbol("Best Original Score"),
    "ORIGINAL_SONG": Symbol("Best Original Song"),
    "PRODUCTION_DESIGN": Symbol("Best Production Design"),
    "ANIMATED_SHORT": Symbol("Best Animated Short"),
    "LIVE_ACTION_SHORT": Symbol("Best Live Action Short"),
    "DOCUMENTARY_SHORT": Symbol("Best Documentary Short"),
    "INTERNATIONAL_FEATURE": Symbol("Best International Feature")
};

//earnings is in millions
const oscars2024Nominations = [
    {
        "name": "Oppenheimer",
        "nominations": [NOMINATIONS.ACTOR, NOMINATIONS.SUPPORTING_ACTOR, NOMINATIONS.SUPPORTING_ACTRESS, NOMINATIONS.CINEMATOGRAPHY, NOMINATIONS.COSTUME_DESIGN, NOMINATIONS.DIRECTOR, NOMINATIONS.FILM_EDITING, NOMINATIONS.PICTURE, NOMINATIONS.MAKEUP, NOMINATIONS.SOUND, NOMINATIONS.ORIGINAL_SCORE, NOMINATIONS.PRODUCTION_DESIGN, NOMINATIONS.ADAPTED_SCREENPLAY],
        "wins": [NOMINATIONS.ACTOR, NOMINATIONS.SUPPORTING_ACTOR, NOMINATIONS.DIRECTOR, NOMINATIONS.CINEMATOGRAPHY, NOMINATIONS.FILM_EDITING, NOMINATIONS.ORIGINAL_SCORE, NOMINATIONS.PICTURE],
        "earnings": "957"
    },
    {
        "name": "Anatomy Of A Fall",
        "nominations": [NOMINATIONS.ACTRESS, NOMINATIONS.PICTURE, NOMINATIONS.DIRECTOR, NOMINATIONS.FILM_EDITING, NOMINATIONS.ORIGINAL_SCREENPLAY],
        "wins": [NOMINATIONS.ORIGINAL_SCREENPLAY],
        "earnings": "32.6"
    },
    {
        "name": "Poor Things",
        "nominations": [NOMINATIONS.SUPPORTING_ACTOR, NOMINATIONS.ACTRESS, NOMINATIONS.CINEMATOGRAPHY, NOMINATIONS.COSTUME_DESIGN, NOMINATIONS.DIRECTOR, NOMINATIONS.FILM_EDITING, NOMINATIONS.MAKEUP, NOMINATIONS.ADAPTED_SCREENPLAY, NOMINATIONS.PICTURE, NOMINATIONS.ORIGINAL_SCORE, NOMINATIONS.PRODUCTION_DESIGN],
        "wins": [NOMINATIONS.ACTRESS, NOMINATIONS.COSTUME_DESIGN, NOMINATIONS.MAKEUP, NOMINATIONS.PRODUCTION_DESIGN],
        "earnings": "108"
    },
    {
        "name": "Barbie",
        "nominations": [NOMINATIONS.SUPPORTING_ACTOR, NOMINATIONS.SUPPORTING_ACTRESS, NOMINATIONS.COSTUME_DESIGN, NOMINATIONS.PICTURE, NOMINATIONS.ORIGINAL_SONG, NOMINATIONS.PRODUCTION_DESIGN, NOMINATIONS.ADAPTED_SCREENPLAY],
        "wins": [NOMINATIONS.ORIGINAL_SONG],
        "earnings":"1445.63"
    },
    {
        "name": "The Zone Of Interest",
        "nominations": [NOMINATIONS.PICTURE, NOMINATIONS.DIRECTOR, NOMINATIONS.INTERNATIONAL_FEATURE, NOMINATIONS.ADAPTED_SCREENPLAY, NOMINATIONS.SOUND],
        "wins": [NOMINATIONS.INTERNATIONAL_FEATURE],
        "earnings": "24.2"
    },
    {
        "name": "American Fiction",
        "nominations": [NOMINATIONS.ACTOR, NOMINATIONS.SUPPORTING_ACTOR, NOMINATIONS.ACTRESS, NOMINATIONS.ORIGINAL_SCORE, NOMINATIONS.ORIGINAL_SONG, NOMINATIONS.PICTURE, NOMINATIONS.DIRECTOR, NOMINATIONS.ADAPTED_SCREENPLAY],
        "wins": [NOMINATIONS.ADAPTED_SCREENPLAY],
        "earnings": "22.8"
    },
    {
        "name": "Killers Of The Flower Moon",
        "nominations": [NOMINATIONS.SUPPORTING_ACTOR, NOMINATIONS.ACTRESS, NOMINATIONS.CINEMATOGRAPHY, NOMINATIONS.COSTUME_DESIGN, NOMINATIONS.DIRECTOR, NOMINATIONS.FILM_EDITING, NOMINATIONS.ORIGINAL_SCORE, NOMINATIONS.ORIGINAL_SONG, NOMINATIONS.PICTURE, NOMINATIONS.PRODUCTION_DESIGN],
        "wins": [],
        "earnings": "156.6"
    },
    {
        "name": "Maestro",
        "nominations": [NOMINATIONS.ACTOR, NOMINATIONS.ACTRESS, NOMINATIONS.CINEMATOGRAPHY, NOMINATIONS.MAKEUP, NOMINATIONS.PICTURE, NOMINATIONS.SOUND, NOMINATIONS.ORIGINAL_SCREENPLAY],
        "wins": [],
        "earnings":"436.3"
    },
    {
        "name": "The Holdovers",
        "nominations": [NOMINATIONS.ACTOR, NOMINATIONS.SUPPORTING_ACTRESS, NOMINATIONS.FILM_EDITING, NOMINATIONS.PICTURE, NOMINATIONS.ORIGINAL_SCREENPLAY],
        "wins": [NOMINATIONS.SUPPORTING_ACTRESS],
        "earnings": "43.1"
    }
]

//Traditional way of finding, say, all movies with a certain nomination
//This is Still Better than the OLD For loop where you have to keep track of the index
var selectedMovies = [];
const NOMINATION = NOMINATIONS.ACTOR;
for(var movie of oscars2024Nominations) {
    if(movie.nominations.includes(NOMINATION)) {
        selectedMovies.push(movie.name);
    }
}
console.log("*** Movies With Nominations For: ", NOMINATION.toString());
for(var movie of selectedMovies) {
    console.log("- ", movie);
}

//Let's use filter(), map(), and reduce() to do the same thing
//REMEMBER - These functions do NOT modify the original array. They return a new array/result
// ALSO, we can chain the functions together

console.log("*** FILTERED Movies Nominated For: ", NOMINATION.description, " Printed using map() function");
var filteredMovies = oscars2024Nominations.filter(movie => movie.nominations.includes(NOMINATION))
    .map(movie => console.log("Nominated - ", movie.name.toUpperCase()));
console.log("------------------");
let totalGross = oscars2024Nominations.reduce((total, movie) => total + parseFloat(movie.earnings), 0);
// BELOW VERSION IN CASE YOU WANT TO SEE THE CUMULATIVE STEPS/TOTALS
// let totalGross = oscars2024Nominations.reduce((total, movie) => {
//     total += parseFloat(movie.earnings);
//     console.log("CUMULATIVE Gross: ", total);
//     return total;
// }, 0);
console.log("Total Gross of ALL Nominated movies: ", totalGross, " Million");
//ANOTHER Good use of reduce() to find AVERAGE gross earnings
let avgGross = oscars2024Nominations.reduce((total, movie, index) => {
    total += parseFloat(movie.earnings);
    if(index === oscars2024Nominations.length - 1) {
        return total / oscars2024Nominations.length;
    }
    return total;
}, 0);
console.log(`USING reduce() function - Avg Gross of ${oscars2024Nominations.length} Nominated movies: $${avgGross} Million`);

//Tally of Fruits in a basket - using reduce()
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
const count = fruitBasket.reduce( (tally, fruit) => {
    tally[fruit] = (tally[fruit] || 0) + 1 ;
    return tally;
} , {}); //Initial value is an EMPTY object
// console.log(count); // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }