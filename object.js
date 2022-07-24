const description=[
    'shivang',
    20,
    '2002',
    'teacher',
    ['ksthiz','naman','shiv','yashvee']
];
console.log(description[description.length-1]);

// object creation
const descrip={
    name:'shivang',
    age:20,
    birthyear:'2002',
    profession:'student',
    friends:['aman','rohan','khubchand','kushgra','jagrati']

};
console.log(descrip);
console.log(descrip['friends'[0]]);// we can access values by using 2 methodes 1 one is this and 2 one is next to this
console.log(descrip.name,descrip.age);
console.log(descrip.friends[1]);

// to add values inside a list.
descrip.hobbies=['cricket','football'];
console.log(descrip);
descrip["hobbies"]=['cricket','learning','sleeping','eating'];
console.log(descrip);

