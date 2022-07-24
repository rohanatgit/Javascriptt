console.log("I have 1 apple and 1 orange");
console.log("I have 2 apple and 2 Oranges");
console.log("I have 3 apple and 3 Oranges");
console.log("I have 4 apple and 4 Oranges");
console.log("I have 5 apple and 5 Oranges");
// first method
for(let i=1;i<=5;i++){
    console.log(`I have ${i} apples and ${i} oranges`);
}
// second method
for(let apples=1,oranges=1;apples<6 && oranges<6;apples++,oranges++){
    if(apples===1 && oranges===1){
        console.log(`I have a ${apples} apples and ${oranges} oranges`);
    }
    else{
        console.log(`I have a ${apples} apples and ${oranges} ornages`);
    }
}
// third method
for(let fruits=6;fruits>1;fruits--){
    if(fruits==1){
        console.log(`I have a ${fruits} apples and ${fruits} oranges`);
    }
    else{
        console.log(`I have a ${fruits} apples and ${fruits} ornages`);
    }
}

// nested loop
for(let apple=1;apple<6;apple++){
    for(let orange=1;orange<6;orange++){
        if(apple>orange){
            console.log(`apples=${apple} & oranges=${orange}`);

        }
    }
}
