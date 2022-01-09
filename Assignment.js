/* let s='Priya'
function count(s){
    s='Priya'
    return s.length
}
console.log(count(s))

function largestNumber(num1,num2){
{if(num1>num2)
        console.log(num1);
    else
        console.log(num2);}
       
}
 
let num1=92
let num2=88
return largestNumber(num1,num2) */
//console.log(largestNumber(num1,num2))


 /*function booleanFlag(int){
    if(int>=5000 && int<=9999)
        console.log(boolean('true'))
    else
        console.log(boolean('false'))
 }*/
       
/* let student1="Bhavani"
let student2="Priya"   
function longestString(student1,student2) {
    let a=student1.length
    let b=student2.length
if(a>b)
    console.log(`${student1}`+' '+'is longer than' +' '+`${student2}`)  
else
    console.log(`${student2}`+' '+ 'is longer than'+`${student1}`)
}


longestString(student1,student2) */


/* switch(employees){
    case 'employees[0]':
        console.log(employees[0].length)
    case 'employees[1]':
        console.log(employees[1].length)
    case 'employees[2]':
        console.log(employees[2].length)
    case 'employees[3]':
        console.log(employees[3].length)
    case 'employees[4]':
        console.log(employees[4].length)
        break;

} */

/* function shortestString(employees){
   
        for(let i=0; i<=5; i++)
             console.log(employees[i],employees[i].length)
}

shortestString(Math.min(employees)) */



/* console.log(employees.reduce(function(r,a){
    return Math.min(r,a.length);}, Infinity
)) */









//employees.forEach ((arr)=>{
////    console.log(arr.length)

//})
/* let employees=['Balu','Lakshmi','Prem','Raj','Janani']
var shortest_string = employees.reduce(function(a,b){return a.length <= b.length?a:b})

console.log(shortest_string)
 */

let employees=['Balu','Lakshmi','Prem','Raj','Ja']
let smallestOfArray= ''
let num = 0


 function shortestString(employees){
   
        num = employees[0].length
        smallestOfArray=employees[0]
        for (i=1;i<employees.length;i++)
         if(employees[i].length<num)
    {
        num=employees[i].length;
        smallestOfArray=employees[i];
        

    }
        return(smallestOfArray)
    
}
console.log(shortestString(employees)) 