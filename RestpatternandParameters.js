/*const arrzero=[1,2,3,4,5];
const arrOne=[6,7,8,9];
console.log(...arrzero,...arrOne);
const[first, ,...rest]=[...arrzero,...arrOne];// rest pattern should be used in the last.

console.log(rest,first);*/

// for objects

const description={
    name:'shivang shrivastava',
    birthyear:2002,
    friends:['koli','pant','dhoni'],
}
const {
    //name:nameofperson,
    name,
    ...rest
}=description;
console.log(nameofperson,rest);

