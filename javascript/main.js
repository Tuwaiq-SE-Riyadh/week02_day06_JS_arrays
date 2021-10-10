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

//----------------Check if a number exists-------------------------------question(1)

function Check(array  , key){

    let resualt = 0;
    for(let i=0 ; i< array.length ; i++){

        if(array [i] === key){
            console.log("exists")
            resualt =1;
            break;
        }      
    }
    if(resualt === 0){
        console.log("otherwise")
    }

}

//----------------Find elements with a specific sum----------------------question(2)

function Find(array  , key){

  
    for (let i = 0; i < array.length; i++)
        for (let j = i + 1; j < array.length; j++)
            if (array[i] + array[j] == key)
                  console.log("(" + array[i] + ", "
                    + array[j] + ")" );

}

//----------------Nnumber of even and odd integers----------------------question(3)

function evenOdd(array){

 
    let nnumberEven= 0
    let nnumberodd= 0

    for (let i = 0; i < array.length; i++){

        if(array[i] %2 === 0)
        {
            nnumberEven++;
        }
        else{
            nnumberodd++;
        }
    }

 
    console.log("number of odd element :" + nnumberodd)
    console.log("number of even element :" + nnumberEven)
}



//------------------------------MAP-----------------------------