function arrayAndKey(arr, key){

    for(i=0;i<arr.length;i++){

        if(key=== arr[i]){
        console.log("True")
        break
        }else if (i===arr.length-1){
            console.log("0")
        }
    }


}

function pairAndKey(arr, key){

    for(i=0;i<arr.length;i++){
       for( j=1;j<arr.length;j++){
        
       if(arr[i] + arr[j] === key && j>i){
        console.log("[ " +arr[i]+" "+ arr[j] +" ]")
        }
    }
    }

}

function evenAndOdd(arr){
even=[],odd=[]
    for(i=0;i<arr.length;i++){
       
       if(arr[i]%2 ===0){
        even.push(arr[i])
       }
        else{
            odd.push(arr[i])
        }
   
    }
    console.log("even elemnts: "+ even + "\n Odd elemnts: "+odd)
    
    }






