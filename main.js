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

//Q1
function CheekIfExist(arr,ind){

    let count=0
    for(let i=0;i<arr.length;i++){
        count++
        if(arr[i]===ind){
            console.log("Find the element "+ind) 
            break;
        }
    }


}


// Q2
function CheekOfSum(arr,key){
    for(let i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
            if(key===arr[i]+arr[j])
            console.log(" we finde "+arr[i]+" and "+arr[j]+" we git "+key);
            break
        }
    }

}



// Q3
function OddEvenNumbers(){

    let arr2=[1,2,3,4,5]
    let odd=0;
    let even=0;
    for(let i=0;i<arr2.length;i++){
        if(arr2[i]%2===0){
            even++;
        }else{
            odd++;
        }
    }

    console.log("the number of odd number is"+odd)
    console.log("the number of even number is"+even)
}


//   Q1 Bouns
function MAP(){
    let arr;
    let arr2;
    arr=characters.map(function(elemnt ,index){
        return elemnt.name
    })

    arr2=characters.map(function(elemnt ,index){
        return elemnt.height
    })
    console.log("the array of names "+arr)
    console.log("the array of height "+arr2)
}

function Reduce(){
    
    arr=characters.reduce(function(total,elemnt ,index){
        return total-elemnt
    })
    console.log(arr)

}
