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

function check(array, num){

    if (array.includes(num)){
        console.log(true);
    }

    else{
        console.log(0);
    }
}


function check2(array2, num2){
    for(let i=0;i<array2.length ; i++){
        for(let j=0;j<array2.length ; j++){
            if ((array2[i]+array2[j])===num2){
                console.log("The some of "+array2[i]+" and "+array2[j] +"is equal "+ num2);
            }
        }
    }
}

function checkEvenOdd(array3){
    for(let i=0 ; i<array3.length; i++){
        if (array3[i]%2===0){
            console.log("The Number "+array3[i]+" is even");
        }
        else {
            console.log("The Number "+array3[i]+ " is odd");
        }
    }
}

// function useMapName(){
//      characters.map(function (element){
//          return console.log( element.name);
//      })
// }

// function useMapHeights(){
//     characters.map(function (element){
//         return console.log( element.height);
//     })
// }

