// 0,null,undefined,"",NaN these value give false;
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(new Date()));
if(null){
    console.log("bucket is empty");
}
else{
    console.log("bucket is false");
}