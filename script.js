let arr = [1,2,3,4,5,6];
let even = [];
let odd = [];

for( let i=0; i<arr.length; i++){
    if(i % 2 == 0){
        even.push(arr[i])
        

    } else {
        odd.push(arr[i])
    }
    
}

    console.log(even)
    console.log(odd)