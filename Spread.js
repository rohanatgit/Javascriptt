const arr=[1,2,3,4,5,6];
const newarr=[0,...arr,8,9,10];
console.log(newarr);
// for objects

const description={
    lastname:'shrivastava',
    firstname:'shivang',
    yearbirth:2002,
}
const descriptionmodified={
    friends:['rohan','vishal','annu'],
    ...description,
}
console.log(descriptionmodified);
// forstring

const nameOfPerson='shivang';
const namearr=[...nameOfPerson];
console.log(namearr);