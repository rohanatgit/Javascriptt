/*const functionarrow=(firstname,lastname)=>
{
    `hy ${firstname} ${lastname}`;
}
console.log(functionarrow("shivang","shrivastava"));*/

const soundclarity=function(shrill,bass){
    const modifiedShrill=regulation(shrill);
    const modifiedBass=modifier(bass);
    return {shrill:modifiedShrill,bass:modifiedBass};
}
const modifier=function(bass){
    return bass*1.5;
}
const regulation=function(shrill){
    return shrill+10;
}
console.log(soundclarity(70,105));