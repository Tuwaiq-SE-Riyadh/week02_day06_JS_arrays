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





function  numberExists(arr , num){
let j =0
for(let i=0; i <arr.length ;i++){
    if (arr[i]===num){
        console.log(true)
        j=1
        break

    }
}
if (j === 0){
    console.log(0)
}
}

function specificSum(arr, num){

    for(let i=0; i <arr.length ;i++){
        for(let j=0; j <arr.length ;j++){
            
            if(arr[i]+arr[j] === num){
                console.log(arr[i]+"+"+arr[j]+"="+num)
            } 
        
        }  
    }

}


function oddEven(arr){

    let even =0
    let odd =0

    for(let i=0; i <arr.length ;i++){

        if( arr[i]%2 ===0 ){
            even++
        }

        else{
            odd++

        }
    }

    console.log(even+" even numbers" )
    console.log(odd+" odd numbers" )


}


function mapName(){
let arr = characters.map(function(element ,index ){
    return element.name
})


console.log(arr)}


function mapheight(){
    let arr = characters.map(function(element ,index ){
        return element.height
    })
    
    
    console.log(arr)}