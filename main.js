// Check if a number exists
function checkIfANumberExists(array ,value)
{
    let flag = false ;
    for(let i = 0 ; i< array.length ; i++)
    {
        if(array[i] === value)
        {
            flag = true ;
            break
        }
    }

    if(flag === true)
    {
        console.log(flag)
    }
    else{
        console.log(flag)
    }
}

// Find elements with a specific sum
function findElementsWithASpecificSum(array,value)
{
    for(let i = 0 ; i< array.length ; i++)
    {
        for(let j = 0 ; j< array.length ; j++)
        {
            if(array[i] + array[j] === value)
            console.log(array[i] + "+" + array[j] + "=" +value  )
        }
    }

}


// Nnumber of even and odd integers
function numberOfEvenAndOddIntegers(array)
{
    let even =0 , odd = 0
    for(let i = 0 ; i< array.length ; i++)
    {
        if(array[i] % 2 === 0)
        {
            even++
        }
        else{
            odd++
        }
    }
    console.log("Even :" + even + " , " + "Odd :" + odd)
}


//------------- (Bonus) Q -------------
//------------- (Bonus) Q -------------
//------------- (Bonus) Q -------------
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

// MAP (Bonus)
function mapExample()
{
    characters.map(function(element, index){
        // the line below will replace the current element with element value + 10
        return   console.log( "Name is: " + element.name + " ,  Height is: " + element.height)
    })
    
}

//REDUCE (Bonus)
// function reduceExample()
// {
//     characters.reduce(function(element,index){
//         return console.log(element.height ) 
//     })
// }