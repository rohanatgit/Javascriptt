const nameOfStudents=['shivang','ravikant',{name:'shivang shrivastava'},'anuska'];// it is dynamic in nature we can store any datatype value in it.
const names=new Array(1,2,3,4,5,6,78,9);// 2 way to initilize and declare a array;
console.log(names);

console.log(nameOfStudents);// print all elements of array.

console.log(nameOfStudents.length);// give length of array.
console.log(nameOfStudents[2]);// give particualr index element from array.

nameOfStudents[1]="vishal";// we can muted the value of an array.
console.log(nameOfStudents);