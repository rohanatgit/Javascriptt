const upperspeed=60;
const lowerspeed=20;
const carspeed=30;
if(carspeed>lowerspeed && carspeed<upperspeed){
    console.log("safe driving");
}
else if(carspeed<lowerspeed){
    console.log("can increase car speed");

}
else if(carspeed>upperspeed){
    console.log("need to decrease car speed");
}
else{
    console.log("all is fine");
}
let gfg='GeeksforGeeks'
console.log(gfg.indexOf('G'))