function CheckNumberExists(array, number){
    // for(let i = 0; i < array.length; i++){
    //     if(array[i] === number){
    //         console.log("True");
    //         return;
    //     }
    // }
    // console.log("Number: "+ number + " not exsist");

    if(array.includes(number)){
        console.log("True");
    }else(
        console.log("Number: "+ number + " not exsist")
    )
}

function specificSum(array, number){
    let sum = 0
    array.forEach(element => {
    for(let i = 0; i < array.length; i++){
        sum = element + array[i];

        if(sum === number){
            console.log("sum of "+element+" " + array[i]);
            
            console.log("True");

        }
    }
});
}

function evenOddArray(array){
    let even = 0
    let odd = 0
    array.forEach(function(element){
        if(element % 2 == 0){
            even++
        }
        else{
            odd++
        }
        

    })
    console.log("Odd number is" + odd);
    console.log("even number is" + even);
}