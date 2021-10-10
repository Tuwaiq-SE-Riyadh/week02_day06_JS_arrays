const characters = [
    {
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

function numberExists(x,y){
    for(let i = 0 ; i < x.length ;i++){
        if (x[i]===y){
            console.log(true);
        }
    }

}
numberExists([1,2,3],3)

function findElements(x,y){
    for(let i = 0 ; i < x.length ;i++){
        if (x[i]+x[i+1]==y){
            console.log(x[i],x[i+1])
        }
    }

}
findElements([1,2,3],3)

function numberOfEvenAndOdd(x,y){
    for(let i = 0 ; i < x.length ;i++){
        if (x[i]%2 == 0){
            console.log("number "+x[i] + " is even")
        }
        else if (x[i]%2 !== 0){
          console.log("number "+x[i] + " is odd")
        }
        else{
          console.log("Not a Number")
        }
    }

}
numberOfEvenAndOdd([1,2,3,5,3,99])