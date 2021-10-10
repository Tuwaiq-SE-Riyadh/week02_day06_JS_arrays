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


const x = [1,2,3,4,5,6,7]






number_exists(x , 2);
console.log("------------------------------------------");
specific_sum(x , 3);
console.log("------------------------------------------");
even_and_odd(x);
console.log("------------------------------------------");
getName();
console.log("------------------------------------------");
getheight();

function number_exists(arr, key){
    for(let i = 0 ; i< arr.length ; i++){
if(arr[i] === key){console.log("True"); return;}
}
console.log("0");}


function  specific_sum(arr, key){
    
    for(let i = 0 ; i< arr.length ; i++){
      
        for(let j = 0 ; j< arr.length ; j++){
            if(arr[i] + arr[j] == key){console.log("Sum of "+arr[i]+"+"+arr[j]+" = "+(arr[i] + arr[j]));}
        }


}}



function even_and_odd(arr){
   let odd = 0 ;
   let even = 0;
for(let i = 0 ; i< arr.length ; i++){
    if(arr[i]%2 === 0){even++;}
    else{odd++;}
}
console.log("Numbers of even ="+even);
console.log("Numbers of odd ="+odd);}





function getName(){
characters.map(function(element){
    console.log(element.name);
});
}

function getheight(){
    characters.map(function(element){
        console.log(element.height);
    });
    }

