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





console.log("------------------Check if a number exists------------------------");
number_exists(x , 2);
console.log("-------------------Find elements with a specific sum-----------------------");
specific_sum(x , 3);
console.log("-------------------Nnumber of even and odd integers-----------------------");
even_and_odd(x);
console.log("-----------------MAP 1-------------------------");
getName();
console.log("-----------------MAP 2-------------------------");
getheight();
console.log("-----------------REDUCE 1-------------------------");
Get_total_heights();
console.log("-----------------REDUCE 2-------------------------");
Get_eye_color();
console.log("-----------------FILTER 1-------------------------");
less_200();
console.log("-----------------FILTER 2-------------------------");
male();
console.log("-----------------SORT 1-------------------------");
sort_mass();
console.log("-----------------SORT 2-------------------------");
sort_h();
console.log("-----------------EVERY 1-------------------------");
mass();
console.log("-----------------EVERY 2-------------------------");
shorter();
console.log("-----------------SOME 1-------------------------");
some_e();
console.log("-----------------SOME 2-------------------------");
some_h();


function number_exists(arr, key){
    for(let i = 0 ; i< arr.length ; i++){
if(arr[i] === key){console.log("True"); return;}
}
console.log("0");}


function  specific_sum(arr, key){
    
    for(let i = 0 ; i< arr.length ; i++){
      
        for(let j = 1 ; j< arr.length ; j++){
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



// ==========================================================

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

function Get_total_heights(){
    const heights = characters.reduce(function (a, el) {
        return el.height + a;
      }, 0);
        console.log(heights);
}

function Get_eye_color(){

    let eye =0;
    let e = characters.reduce(function (a, el) {
        if(el.eye_color == 'blue'){
        return ++eye;}
      }, 0);
        console.log("Blue= "+e);

        let eye2 =0;
        let e2 = characters.reduce(function (a2, el2) {
            if(el2.eye_color === 'yellow'){
            return eye2++;}
          }, 0);
            console.log("yellow= "+eye2);

         eye2 =0;
         e2 = characters.reduce(function (a2, el2) {
            if(el2.eye_color === 'brown'){
            return eye2++;}
          }, 0);
            console.log("brown= "+eye2);

}

function less_200(){
    const h = characters.filter(function (el) {
        return el.height < 200;
      });
      
      console.log(h);
}

function male(){
    const m = characters.filter(function (el) {
        return el.gender === 'male';
      });
      
      console.log(m);
}

  function mass(){
    const m = characters.every(function(el){
        return el.mass > 40
      })
      console.log(m)
}

function shorter(){
    const m = characters.every(function(el){
        return el.height < 200
      })
      console.log(m)
} 

function sort_mass(){
    const m = characters.sort(function(el , e2){
        return el.mass - e2.mass;
      })
      console.log(m)
} 

function sort_h(){
    const m = characters.sort(function(el , e2){
        return el.height - e2.height;
      })
      console.log(m)
} 

function some_e(){
    const m = characters.some(function(el){
        return el.eye_color === "blue";
      })
      console.log(m)
} 

function some_h(){
    const m = characters.some(function(el){
        return el.height > 210;
      })
      console.log(m)
} 