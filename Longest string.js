let student1="Bhavani"
let student2="Priya"   
function longestString(student1,student2) {
    let a=student1.length
    let b=student2.length
if(a>b)
    console.log(`${student1}`+' '+'is longer than' +' '+`${student2}`)  
else
    console.log(`${student2}`+' '+ 'is longer than'+`${student1}`)
}


longestString(student1,student2)