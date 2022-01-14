var arr2 = [4,5,6,7,6,6,4];
 let output = 0;
 let maxElement = '';
 function maximumRepeatedElement(m){
     for (i=0;i<m.length;i++){
         let count = 1;
         {
             for (j=i+1;j<m.length;j++)
                if (m[i] == m[j])
                    count +=1;
        
         }
         if (count>output){ 
            output=count;
             maxElement=m[i];
        }
        else
             continue;
     }
    console.log(maxElement+' ' +'is repeated '+output+' '+'times')  
 }
 maximumRepeatedElement(arr2)