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

function chech(array , x){

    for( let i = 0; i < array.length; i++){
      if (array[i]==x){
       return true;
        }
        
}
  return false;    
}



function sum(array, x){

    for( let i = 0; i < array.length; i++){
        for( let j = i+1 ; j < array.length; j++){
            let y =array[i]+array[j];
        if (y==x){
        console.log(array[i]+"  "+array[j])
    }

        }

    }
}

function addEven (array){
    for( let i = 0; i < array.length; i++){
        if (array[i]%2==0){
            console.log(array[i] +" even") }
                else console.log(array[i] +" odd")}
}
    
 
   let y=characters.map(function(element,index){
            return element.height  })
 let x=characters.map(function(element,index){
            return element.name  })
    
            

           
