// simple method of object creation:

// const obj = {
//     name:"shivraj jadhav",
//     id:1321564,
//     age:25,
//     location:"Pune",
//     company:"dkkjbv"
// }

// console.log(obj);
// console.log(obj.name )
// console.log(obj["name"])

// simple object:
// const obj = {
//     name : "virat",
//     runs : 220,
//     running :function century(){
//         console.log("when 100 complete"); // undefined
//         // return "when 100 complete"     // when 100 complete
//     }
// }
// console.log(obj.running());

// //Using New Keyword: to create a new, unique instance of an object from a constructor function or a class
// let test = new Object();
// test.name = "codefirst";
// test.mobileno = 1654646165;
// console.log('Using new keword',test);

//using obj assign:
// let sampleobj = Object.assign({name:"bfjdbjh", runs:"200"});
// console.log(sampleobj);

//object.create
const palyer = {
    name : 'MSD',
    Runs : 55
}
const team = Object.create(palyer);
team.name = "Bumrah",
team.Runs = 44,
team.wicket = 5;

console.log(team);