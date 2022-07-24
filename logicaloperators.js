const carModel=false;
const carPrice=200000;
const amountInWallet=1.500000;
if(amountInWallet>=200000 && carModel==true){
    console.log("Car can be bought");
}
else{
    console.log("car cant be bought");
}
if(amountInWallet>=200000 || carModel==true){
    console.log("Car can be bought");
}
else{
    console.log("car cant be bought");
}
if(!carModel){
    console.log("car can be bought");
}