
const array=[1, 2, 3, 4];

function exist(array , key){

for (let i = 0; i < array.length; i++) {
    
    if(key===array[i]){
        console.log("True")
    }
}
}

const array2=[1, 2, 3];

function sum(array2 , key){

    let a;
    for (let i = 0; i < array2.length; i++) {
        for (let j=1; j < array2.length; j++){
            a=array2[i]+array2[j];
            if(a===key)
            console.log(array2[i]+" + "+array2[j]+" = "+a)

        }
        
    }

}

const array3=[1,2,3,4,5,6,7];

function evenOdd(array3){

    let a=0, b=0;
    for(let i=0 ; i<array3.length ; i++){
        if(array3[i]%2==0){
            a++;
        }
        else{
            b++;
        }
    }
    console.log("Even numbers: "+a)
    console.log("Odd numbers: "+b)
}
