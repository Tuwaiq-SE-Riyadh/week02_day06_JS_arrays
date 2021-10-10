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

function Check(array, key) {

    for (let index = 0; index < array.length; index++) {
        if( array[index] == key){
            return true;
        }
    }
    return 0;
}

function FindSum(array , key) {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            let sum = array[j]+array[i];
            if(sum === key)
                console.log(array[j] + "+" + array[i] +" = " + key);
                break;
            
        }        
    }
    
}

function EvenOdd(array) {
    let odd =0 ;
    let even =0 ;

    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0){
            even++;
        }else{
            odd++;
        }   
    }
    console.log("the number of odd: "+ odd + " the number of even: "+ even);
    
}







// Bonus
characters.map(function(value, index){
    const names = [value.name];
    return names;
})

characters.map(function(value, index){
    const heights = [value.name];
    return heights;
})