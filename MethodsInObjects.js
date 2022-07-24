const bonus=20000;
const employeeDetail={
    name:'shivang',
    age:23,
    birthyear:'2002',
    profession:'student',
    friends:['anuska','jagrati','rohan','aman'],
    initialSalry:30000,
    clacuatesalery:function(){
           return this.initialSalry*0.8+bonus;
}
}
//const clacuatesalery=function(initialsalery){
 //   return initialsalery*0.8*bonus;
console.log(employeeDetail.clacuatesalery());