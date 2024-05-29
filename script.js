let frist=[];
let last=[];
var names = 'MANI KANDAN'.split(" ").join("")
for(let i=0; i<names.length; i++){
    if(i % 2 == 0){
        frist.push(names[i]);
    } else {
        last.push(names[i])
    }
}
console.log(frist);
console.log(last)