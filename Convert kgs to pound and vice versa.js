let input = 10
let measurement = 'kg'
function convertUnits(input,measurement) { 
    if(measurement === 'kg')
        return(parseInt(input * 2.2))
    else 
        return(parseInt(input /2.2))
}
 console.log(convertUnits(input,measurement) ) 