//"Using the inbuild function reduce()
 
 let employees=['Balu','Lakshmi','Prem','Raj','Janani']
var shortest_string = employees.reduce(function(a,b){return a.length <= b.length?a:b})

console.log(shortest_string +' '+'is the shortest string in the array')

//Using the function 
let employees=['Balu','Lakshmi','Prem','Raj','Ja']
 function shortestString(a){
    let x=a[0];
    for(i=0;i<a.length;i++){
        if(a[i].length<x.length)
            x=a[i];
    }
     return x  
}
console.log(shortestString(employees))