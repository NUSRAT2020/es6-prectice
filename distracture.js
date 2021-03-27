const person = {id : 2 , name : "kajol", address :"alu khet",friends :["Niloy", "raj"," kobita"], phone : "01717733445",gfName :"Ema Warson "};
// const gfName = person.gfName;
// console.log(gfName);
// const phone = person.phone
// console.log(phone);

// const {phone} = person
// const { id , name ,gfName} = person
// console.log( id , name ,gfName);

const friends = ["Sabnur","bobita","popy","mousumi","purnima"]
// u can use any name ..
const [protom , ditio ,...sobFriend] = friends;

console.log( sobFriend);

const complexObject ={
        name : " abc", 
        info :{ 
                address : " gach tola",
                leader: " shial ar lidar"

        }
}
const {leader} = complexObject.info;
console.log(leader);
