const arr =[2,9,3,4]
function checkIfNumExists(arr, key)

{
    for (let i = 0; i < arr.length; i++) {
   	 if(key == arr[i])
   	 {
   	 	console.log("true");
   	
   	 }
    }
    
    
 
}
const array1 =[9,3,4]
function findSumElements(arr, target)
{
    	
	for (let i = 0; i < array1.length; i++) 
   		for (let j = i; j < array1.length; j++) 
   	 	{
   		 	if((arr[i] + arr[j]) == target)
                console.log("Found "+array1[i]+" + "+arr1[j]+" = "+target+" in array <br>");
   	 	}
}

const array2=[1,2,3,4,5,6,7]
function CountingEvenOdd(array2)
{
    var even_count = 0;
    var odd_count = 0;
 
    for(var i = 0; i < array2.length; i++) {

        if (arr[i] % 2 != 0)
            odd_count++;
        else{
            even_count++;
        }
    }
 
console.log("even numbers"+even_count++);
console.log("odd numbers"+odd_count++);
}
 
 
