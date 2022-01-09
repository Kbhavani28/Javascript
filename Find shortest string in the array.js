 let employees=['Balu','Lakshmi','Prem','Raj','Janani']
var shortest_string = employees.reduce(function(a,b){return a.length <= b.length?a:b})

console.log(shortest_string +' '+'is the shortest string in the array')