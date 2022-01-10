
function convertUnits(input,measurement) { 
    if(measurement === 'kg')
        return(parseInt(input * 2.2) +'lbs')
    else 
        return(parseInt(input /2.2) +'kg')
}
 console.log(convertUnits(20,"kg") ) 