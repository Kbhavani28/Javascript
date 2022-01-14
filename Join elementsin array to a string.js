const student = ['p','r','i','y','a']
function changeToString(n){
let x = " ";
for(i=0;i<student.length;i++){
      x+= n[i]+ "";

    }
    return x
}
console.log(changeToString(student)) 