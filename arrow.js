// function doubleIt(num){
//         return num * 2 ;

// }
//  const doubleIt = function(num){
//         return num * 2
//  }
const doubleIt = num => num * 2 ; 
const add = ( x, y) => x + y
const giveMe = ()=> 30;
const doMAth = (x , y )=> { 
        const sum =  x+y
        const diff = x-y 
        const result = sum + diff ;
        return result;
} ;

const result = doubleIt(10);
const result2 = add(5 ,6);
const result3 = giveMe() ;
const result4 = doMAth(2,4)

console.log( result );
console.log( result2 );
console.log( result3 );
console.log( result );