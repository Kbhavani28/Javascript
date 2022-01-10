
function longestString(student1,student2) {
    let a=student1.length
    let b=student2.length
if(a>b)
    return student1
else
   return student2
}


console.log('Longest string is'+' '+longestString('Janani','Raj'))