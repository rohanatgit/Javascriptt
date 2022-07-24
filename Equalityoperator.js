// loose equality == operator.
// strict equality === operator.
// in case of strict equality java compiler doesnt perform a type quarsion
// but in case of loose it will perform a type quarsion.


//prefer strict operator

if("23"==23){
    console.log("they are equal");

}
else{
    console.log("they are not equal");
}
if("23"===23){
    console.log("they are equal");

}
else{
    console.log("they are not equal");
}


    if("23"!=="23"){
        console.log("true");
    }
    else{
        console.log("false");
    }
    