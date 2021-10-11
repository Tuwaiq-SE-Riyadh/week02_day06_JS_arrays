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


//fiend helped me a little with this one
function nameAndHeight(){
    names=[]
    heights=[]
characters.map(function(element){

    return names.push(element.name), heights.push(element.height);
    
})
    console.log(names)
    console.log(heights)
}


function totalHeight(){  //Was not sure how to use "reduce" method. I looked online and found some help at https://www.youtube.com/watch?v=g1C40tDP0Bk&ab_channel=ProgrammingwithMosh
    
    const sum=characters.reduce((accumulator , currentValue)=>{
        return accumulator + currentValue.height ;
        
    } , 0)
    
    console.log("The sum of heights is: "+ sum)

    }





