const description=[
    'shivang shrivastava',
    '2002',
    23,
    'teacher',
    'Uttar Predesh',
    ['khubchand','Aman','Sagar','jaggu','kushgrgh']
];
const type=[];
for(let i=0;i<description.length;i++){
    //console.log(description[i]);
    type.push(typeof description[i]);
}
//console.log(type);
for(let i=0;i<description.length;i++){
    if(type[i]!=='String'){
        continue;
    }
    if(type[i]=='number'){
        break;
    }
    console.log(description[i]);
}