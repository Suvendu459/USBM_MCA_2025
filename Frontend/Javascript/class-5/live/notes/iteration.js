// iteration
// print 1 to 100 using loop



// while loop
//syntax:
//while(condition){
//code to be executed
//}

/*let num=1;//declaration
console.log("Global:",num);
while(num<=10){
    console.log("Block",num);
    num++;
}
console.log("Global",num);*/

// Do.... while loop :
//syntax:
//do{
//code to be executed
//}while (condition)
//Ex: asking for user to the correct input
let userAns;
do{
    userAns = readLine("what is the capital of  Odisha");
}while(userAns !=="Bhubaneswar");
console.log("wrong");