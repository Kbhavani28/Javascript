//let dat ="Welcome\n to \nJanani"

//console.log(dat)
/*var num = prompt ('Enter a  number');
if(num%2===0)
    console.log('Even');
else
    console.log('Odd') ;*/

 /*let input = {
    name:'Bhavani',
    qualification:'M.Com',
    dob:'03.28.1981',
    work_exp: '4 years',
    designation:{
        role:'Manual QA',
        company:'Augusta',
    laptop:{
        cpu:'i7',
        ram:4,
        brand:'Asus'

    }
    }
    
} 
/*console.log(input?.name,input.dob,input.qualification,input.designation.role.length) 

console.log(typeof input)

for(let key in input.designation ){
    console.log(key,input.designation[key])
}

for(let key in input.designation.laptop){
    console.log(key,input.designation.laptop[key])}*/


//delete( input.designation.laptop)
//console.log(input)

/*function greet(user,lname,state){
    return`Hi ${user},${lname},${state}` 
}
let user = 'Priya' 
let lname = 'Raj' 
let state = 'NJ'
let str = greet(user,lname,state);
console.log(str)

function add(){
    return(num1+num2)
}
let num1=8
let num2=6
let sum = add()
console.log(sum)

function a(s){
    return s .split('').reverse().join('')
}
let s = 'Priya'
let k = a(s)
console.log(k)

function j(l){
    return l.toString().split('').reverse().join('')
}
let l = 12345
let t = j(l)
console.log(t)

let u = function(n1,n2){
    return(n1+n2)
}
let n1 = 3
let n2 = 8
let result = u(n1,n2)
console.log(result)

let sub = function (int1,int2){
    if(int1%2===0)
        console.log ('Even');
    else
        console.log ('Odd')
    if(int2%2===0)
        return 'Even'
    else
        return'Odd'
}
let int1 = 10
let int2 = 19
let g = sub(int1,int2)
console.log(g)*/

/*let input1 = {
    name: 'Priya',
    dob: '03.28.1981',
    experience:'3 yrs',
    loction:'Texas',
    getdata:function(){
        console.log(this.name)},

    compare: function (other){
        if(this.experience>other.experience)
            console.log(this)
        else
            console.log(other)
    
    }

}

let input2 = {
    name: 'Bhavani',
    dob: '03.28.1980',
    experience:'2 yrs',
    location:'NJ',
    getdata:function(){
        return(this.name)
    }
}
let input3 = {
    name: 'Janani',
    dob: '03.28.1983',
    experience:'4 yrs',
    location:'NJ',
    getdata:function(){
        return(this.name)
    }
}

input1.compare(input3)





/*console.log(input2.getdata())
function data(input1,input2){
    if (input2.location > input1.location)
        console.log('input2')
    else if (input2.experience > input1.experience)
        console.log('input2.name')
    else
        console.log(input1.name)
}

data(input1, input2)

for (let key in input2){
    console.log(key,input2[key])
}

console.log(input1)




/*let anu =(q)=> console.log('Hello'+q)

let q = 'Priya'
anu(q)*/
/*let anu =(q)=>console.log("Hello" +q )
let q = "Priya"
anu(q)

function Alien(name,tech){
    this.fullname=name
    this.technology=tech
}
let alien1 = new Alien('Janani','Python')
let alien2 = new Alien('Adhithya','CPA')
console.log(alien1,alien2)*/

/*let data= ['Priya',40,{occupation:'developer'},{},function a(){console.log('Hello there')}]

console.log(data)
console.log(data.push('Janani',9,{}))
console.log(data)*/


let num= [5,7,8,9]
// console.log(num)
// let [a,b,c,d] = num;
// console.log(a)
// console.log(d)
// let[a,,...c] = num
// console.log(a)
// console.log(c)
// console.log(num.pop())
// console.log(num.splice(2,8 , 7, 6))
// console.log(num)

let user_name ="Fullname is Bhavanipriya Kanakaraj" .split(' ')
console.log(user_name)
// let [p,q,r,s] = user_name
// console.log(q)
// console.log(s)
for(let names of user_name){
    console.log(names)
}

let user =['Priya','Janani','Adhithya','Raj','Lakshmi']
let num1= [5,7,8,9]
/* num1.forEach(l =>{
    if(l%2 ===0)
        console.log(l)
    else    
        console.log()
}

) */

let num2=[1,2,3,4,5,6]
let result =num2.filter(n=>n%2===0)
    .map(n=>n*2)
    .reduce((a,b)=>a+b)
console.log(result)

let array =[5,1,3,2,6]
result =array.map(l=>l*3)
console.log(result)

