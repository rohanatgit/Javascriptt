const description={
    firstName:'shivang',
    lastName:"shrivastava",
    friends:['ksthiz','rohan','vishal','aman'],
    birthyear:2002,
    features:{
        height:'5.8',
        weight:'55',
    }
}
const 
{
    firstName:first,
    lastName:last,
    friends:friendsOfShivang,
}=description;

const {
    features:{
        height:heightOfperson,
        weight:weightOfPerson,
    }
}=description;

console.log(first,last,friendsOfShivang);
console.log(heightOfperson,weightOfPerson);

// mutation

let f='rahul';
let l='kumar';
({
    f,l
}={
    f:'shivang',
    l:'shrivastava',
}
)
console.log(f,l);