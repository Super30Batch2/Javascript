const sampleArr = [1, 2, 3, 4, 5, 6, "seven", "eight"];

console.log(sampleArr);

//push
//Def: - The Push Methods is basically used to add the element at the end of the array it mutate the origanl array means the changes reflect to the original array

sampleArr.push("Shivraj");

console.log("Add element using push", sampleArr);

//pop
//Def: The POP is uesd to remove the last element of an array which also make the changes in the original array
sampleArr.pop();

console.log("Remove element using pop", sampleArr);

//shift
//The Shift is used ti remove the element from the starting of the array it mutate the original array;

sampleArr.shift();
console.log("Remove the Element using shift", sampleArr);

//unshift
//The Unshift method is used to add the element to the starting at the array which also mutates the original array
sampleArr.unshift("one");
console.log("Add the first element using the unshift", sampleArr);

//splice
//the splice method used to modify the original array we can add the element at specific index using splice
sampleArr.splice(2, 1, "Three");
console.log("modify the arary using splice method", sampleArr);

sampleArr.splice(3, 1, "Four");
console.log(sampleArr);

sampleArr.splice(2, 1, 3);
console.log(sampleArr);

//map
//Def:- The map is used to iterate and perform operation on each array element and returns a shallow copy of it

const mapOperation = sampleArr.map((element, index, arr) => element * 3);

console.log("The Operation performed by using map method", mapOperation);

//filter
//the filter is basially used to filter the array elements based on given condition should ideally return a boolean condition rather than a transformed value.
const filterMethodsUse = sampleArr.filter(
  (element, index, arr) => element >= 10
);

console.log("Operation performed using Filter Method", filterMethodsUse);

//reduce
//The Reduce Method is used to reduce the array into a single value  which doesnot mutate original array

const arr = [12, 12, 12, 12, 12, 12, 12, 12];

const reduceOperation = arr.reduce((accum, element, index, array) => {
  return accum + element;
}, 0);

console.log("Operation Performed using reduce", reduceOperation);

console.log("0" && {});
console.log(0 || {});
