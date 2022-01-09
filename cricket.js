function Cricket (captain,place,person){
    this.captain = captain,
    this.location = place,
    this.coach = person
}
const westIndies = new Cricket('Jason Holder','West Indies','Phil Simmions')
const sriLanka = new Cricket('Dimuth Karunaratne','Sri Lanka','Mickey Arthur')
const india = new Cricket('Virat Kohli','India','Rahul Dravid')
const england = new Cricket('Joe Root','England','Chris Silverwood')
const australia = new Cricket('Aaron Finch','Australia','Justin Langer')
console.log(india['coach'])