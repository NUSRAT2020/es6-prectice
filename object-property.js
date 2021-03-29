const students =
[       {id:21 ,name:"Moyna"},
        {id:11 ,name:"Tuntuni"},
        {id:51 ,name:"kajol"},
        {id:31 ,name:"Nila"}]

// for (let i = 0; i < students.length; i++) {
//         const student = students[i];
//         student.name = name ;
//         name.push(name);
//         console.log(name);

        
// }
const name = students.map(s => s.name);
const smaller= students.filter( s => s.id<40)
const smallerOne= students.find( s => s.id<40)
console.log( smallerOne );