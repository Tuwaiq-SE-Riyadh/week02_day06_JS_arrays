const characters = [{
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];
//Check if a number exists
function CheckNum(arrays, num) {
    let c = 0
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] == num) {
            console.log(true)
            c = 1
            break
        }
    }
    if (c === 0) {
        console.log(false)
    }
}


//Find elements with a specific sum
function sumE(arrays, num) {

    for (let i = 0; i < arrays.length; i++) {
        for (let j = 1; j < arrays.length; j++) {
            let sum = arrays[i] + arrays[j]
            if (sum === num) {
                console.log(arrays[i], arrays[j])

            }
        }
    }
}
//Nnumber of even and odd integers
function evenOdd(arrays) {
    let evenA, odd
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] % 2 === 0) {
            console.log("Even Number " + arrays[i])
            continue


        } else {
            console.log("Odd Number " + arrays[i])

        }
    }

}


//Get array of all names
console.log(characters.map(function names(characters) {
    console.log('array of all names: ');
    return characters.name
}))

//Get array of all heights
console.log(characters.map(function names(characters) {
    console.log('array of all heights: ');
    return characters.height
}))

//Reduse
//Get total height of all characters
//let acc = 0
console.log(characters.reduce(function reduse1(acc, characters) {
    let h = parseInt(characters.height)
    let frist = 0
    console.log('total height of all characters: ');
    return parseInt(frist + h)
}));


//FILTER (Bonus)
//Get characters with height less than 200
console.log(characters.filter(function fHeight(characters) {
    console.log(' characters with height less than 200:');
    return (characters.height < 200)
}));
//Get all male characters